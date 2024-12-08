const Doctor = require("../../models/doctor.model");
const Service = require("../../models/service.model");
const User = require("../../models/user.model");
const Appointment = require("../../models/appointment.model");


exports.getFilteredDoctors = async (req, res) => {
  try {
    console.log("req.body", req.body);

    const { rating, distance, userId, gender, search } = req.body;
    const type = parseInt(req.body.type);

    if (!userId) {
      return res.status(200).json({
        status: false,
        message: "Oops ! Invalid details",
      });
    }

    let genderQuery = {};
    if (gender && gender !== "both") {
      genderQuery = { gender: gender.toLowerCase() };
    }

    let ratingQuery = {};
    if (rating) {
      ratingQuery = { rating: { $gte: rating } };
    }

    let searchQuery = {};

    searchQuery = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { "service.name": { $regex: search, $options: "i" } },
        { "service.subService": { $regex: search, $options: "i" } },
      ],
    };

    const user = await User.findOne({ _id: userId }).select("_id doctors");

    if (!user) {
      return res.status(200).send({
        status: false,
        message: "Cannot fetch user right now",
      });
    }

    if (search === "") {
      return res.status(200).send({
        status: true,
        message: "Success",
        data: [],
      });
    }

    const doctors = await Doctor.aggregate([
      {
        $match: {
          isBlock: false,
          isDelete: false,
          ...ratingQuery,
          ...genderQuery,
        },
      },
      {
        $lookup: {
          from: "services",
          localField: "service",
          foreignField: "_id",
          as: "service",
        },
      },
      {
        $match: searchQuery,
      },
      { $sort: { charge: 1 } },
    ]);

    if (doctors.length > 3 && type) {
      const chunkSize = Math.ceil(doctors.length / 3);
      const chunks = [];
      for (let i = 0; i < doctors.length; i += chunkSize) {
        chunks.push(doctors.slice(i, i + chunkSize));
      }
      const filteredDoctors = chunks[type - 1] || [];


      return res.status(200).send({
        status: true,
        message: "Success",
        data: filteredDoctors,
      });
    } else {
      return res.status(200).send({
        status: true,
        message: "Success",
        data: doctors,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.getDoctorsServiceWise = async (req, res) => {
  try {
    console.log("req.body", req.body);

    const { userId } = req.body;
    const search = req.query.search || "";

    if (!userId) {
      return res.status(200).json({
        status: false,
        message: "Oops ! Invalid details",
      });
    }

    const [services, user] = await Promise.all([
      Service.find({ status: true, isDelete: false }).select("_id name"),
      User.findOne({ _id: userId }).select("_id doctors"),
    ]);

    if (!user) {
      return res.status(200).send({
        status: false,
        message: "Cannot fetch user right now",
      });
    }

    const serviceIds = services.map((service) => service._id);

    const doctors = await Doctor.find({
      isBlock: false,
      isDelete: false,
    }).sort({ charge: 1 });

    const doctorsByService = {};
    services.forEach((service) => {
      doctorsByService[service._id] = [];
    });

    doctors.forEach((doctor) => {
      doctor.service.forEach((serviceId) => {
        if (doctorsByService[serviceId]) {
          doctorsByService[serviceId].push(doctor);
        }
      });
    });

    const updatedDoctorsByService = [];
    Object.keys(doctorsByService).forEach((serviceId) => {
      let data = doctorsByService[serviceId];

      const updatedDoctors = data.map((doc) => ({
        ...doc.toObject(),
        isSaved: user?.doctors?.some((savedDocId) =>
          savedDocId.equals(doc._id)
        ),
      }));

      updatedDoctorsByService.push({
        serviceId: serviceId,
        serviceName: services.find((service) => service._id.equals(serviceId))
          .name,
        doctors: updatedDoctors,
      });
    });

    return res.status(200).send({
      status: true,
      message: "Success",
      data: updatedDoctorsByService,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.getDoctorDetails = async (req, res) => {
  try {
    if (!req.query.doctorId || !req.query.userId) {
      return res
        .status(200)
        .send({ status: false, message: "DoctorId is required" });
    }

    const doctor = await Doctor.findOne({
      _id: req.query.doctorId,
      isDelete: false,
      isBlock: false,
    }).populate("service");

    if (!doctor) {
      return res
        .status(200)
        .send({ status: false, message: "Doctor not found" });
    }

    const [patients, user] = await Promise.all([
      Appointment.aggregate([
        {
          $match: {
            doctor: doctor._id,
            status: 3,
          },
        },
        {
          $group: {
            _id: "$user",
            count: { $sum: 1 },
          },
        },
      ]),
      User.findById(req.query.userId).select("doctors"),
    ]);

    const isSaved = user && user.doctors.includes(doctor._id);

    return res.status(200).send({
      status: true,
      message: "Doctor found successfully",
      data: doctor,
      patients: patients[0] ? patients[0].count : 0,
      isSaved,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const { userId, serviceId } = req.query;

    const [doctors, user] = await Promise.all([
      Doctor.find({
        isDelete: false,
        isBlock: false,
        service: { $in: serviceId },
      }),
      User.findOne({ _id: userId }).select("_id doctors"),
    ]);

    const updatedDoctors = doctors.map((doc) => ({
      ...doc.toObject(),
      isSaved: user.doctors.some((savedDocId) => savedDocId.equals(doc._id)),
    }));

    const savedDoctor = user.toObject();
    savedDoctor.doctors = updatedDoctors;

    return res.status(200).send({
      status: true,
      message: "Data found",
      data: savedDoctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.saveDoctor = async (req, res) => {
  try {
    const { userId, doctorId } = req.query;

    const [user, doctor] = await Promise.all([
      User.findOne({ _id: userId, isDelete: false, isBlock: false }),
      Doctor.findOne({ _id: doctorId, isDelete: false, isBlock: false }),
    ]);
    if (!user) {
      return res.status(200).json({
        status: false,
        message: "User not found",
      });
    }
    if (!doctor) {
      return res.status(200).json({
        status: false,
        message: "Doctor not found",
      });
    }

    if (user.doctors.includes(doctor._id)) {
      user.doctors.pull(doctor._id);
      await user.save();
      return res.status(200).json({
        status: true,
        message: "Doctor removed successfully",
      });
    } else {
      user.doctors.push(doctor._id);
      await user.save();
      return res.status(200).json({
        status: true,
        message: "Doctor saved successfully",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.searchDoctors = async (req, res) => {
  try {
    const search = req.query.search.trim();

    const doctors = await Doctor.find({
      name: { $regex: search, $options: "i" },
      isDelete: false,
      isBlock: false,
    });
    return res.status(200).send({ status: true, data: doctors });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.allSavedDoctors = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findOne({ _id: userId }).populate({
      path: "doctors",
      match: { isDelete: false, isBlock: false },
      select:
        "name image designation degree rating clinicName isDelete isBlock service",
    });

    if (!user) {
      return res.status(200).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      status: true,
      message: "success!!",
      data: user.doctors,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};
