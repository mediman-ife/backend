const Doctor = require("../../models/doctor.model");
const moment = require("moment");
const { deleteFile } = require("../../middleware/deleteFile");
const Appointment = require("../../models/appointment.model");

exports.login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(200)
        .send({ status: false, message: "Oops Invalid Details" });
    }

    const doctor = await Doctor.findOne({
      email: req.body.email,
      password: req.body.password,
      isDelete: false,
    });
    if (!doctor) {
      return res
        .status(200)
        .send({ status: false, message: "doctor not found" });
    }

    if (doctor.isBlock) {
      return res
        .status(200)
        .json({ status: false, message: "You are blocked by admin!!" });
    }

    doctor.fcmToken = req?.body?.fcmToken
      ? req?.body?.fcmToken
      : doctor?.fcmToken;

    doctor.latitude = req.body.latitude || doctor.latitude;
    doctor.longitude = req.body.longitude || doctor.longitude;
    await doctor.save();
    return res.status(200).json({
      status: true,
      message: "finally, doctor login Successfully!!",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: false,
      message: error.message || "Internal Server error",
    });
  }
};

exports.getDoctorDetails = async (req, res) => {
  try {
    if (!req.query.doctorId) {
      return res
        .status(200)
        .send({ status: false, message: "DoctorId is required" });
    }
    const doctor = await Doctor.findOne({
      _id: req.query.doctorId,
      isDelete: false,
    }).populate("service");

    if (!doctor) {
      return res
        .status(200)
        .send({ status: false, message: "Doctor not found" });
    }

    if (doctor.isBlock) {
      return res.status(200).send({
        status: false,
        message: "Your are blocked by admin,contact admin for further details",
      });
    }

    return res.status(200).send({
      status: true,
      message: "Doctor found successfully",
      data: doctor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};


exports.updateTime = async (req, res) => {
  try {
    if (!req.query.doctorId || !req.query.day || req.body.isBreak === undefined) {
      return res.status(200).send({ status: false, message: "Invalid details" });
    }

    console.log("req,body",req.body)

    const day = moment(req.query.day, "dddd").format("dddd");
 

    const doctor = await Doctor.findOne({
      _id: req.query.doctorId,
      isDelete: false,
    }).populate("service");
    if (!doctor) {
      return res.status(200).send({ status: false, message: "Doctor not found" });
    }
    if (doctor.isBlock) {
      return res.status(200).send({
        status: false,
        message: "You are blocked by admin, contact admin for further details",
      });
    }

    const today = moment().format("YYYY-MM-DD");

    const existingAppointments = await Appointment.find({
      doctor: req.query.doctorId,
      date: { $gte: today },
      status: 1,
    });

    const appointmentsWithDay = existingAppointments.map((appointment) => ({
      ...appointment.toObject(),
      dayOfWeek: moment(appointment.date).format("dddd"),
    }));

    console.log("appointmentsWithDay", appointmentsWithDay)

    const weekDay = doctor.schedule.find((time) => time.day === day);
   

    if (!weekDay) {
      return res.status(200).send({
        status: false,
        message: "Invalid day format or something went wrong",
      });
    }

    const matched = appointmentsWithDay.filter((appointment) => appointment.dayOfWeek === weekDay.day);

    // Count the matched appointments
    const matchedAppointments = matched.length;

    console.log("matchedAppointments", matchedAppointments);


    
    if (matchedAppointments > 0) {
      return res.status(200).send({
        status: false,
        message: `You have ${matchedAppointments} appointment scheduled on ${day}, please complete or cancel those appointments first to update schedule`,
      });
    }

    const convertTo24HourFormat = (time) => moment(time, ["hh:mm A"]).format("HH:mm");

    const startTime = req.body.startTime ? convertTo24HourFormat(req.body.startTime) : convertTo24HourFormat(weekDay.startTime);
    const endTime = req.body.endTime ? convertTo24HourFormat(req.body.endTime) : convertTo24HourFormat(weekDay.endTime);
    const breakStartTime = req.body.breakStartTime ? convertTo24HourFormat(req.body.breakStartTime) : convertTo24HourFormat(weekDay.breakStartTime);
    const breakEndTime = req.body.breakEndTime ? convertTo24HourFormat(req.body.breakEndTime) : convertTo24HourFormat(weekDay.breakEndTime);

    weekDay.startTime = req.body.startTime ? req.body.startTime : weekDay.startTime;
    weekDay.endTime = req.body.endTime ? req.body.endTime : weekDay.endTime;

    if (req.body.isBreak === false) {
      weekDay.breakStartTime = "";
      weekDay.breakEndTime = "";
      weekDay.isBreak = false;

      if (endTime < startTime) {
        return res.status(200).send({
          status: false,
          message: "End time cannot be before start time.",
        });
      }
    } else {
      weekDay.breakStartTime = req.body.breakStartTime ? req.body.breakStartTime : weekDay.breakStartTime;
      weekDay.breakEndTime = req.body.breakEndTime ? req.body.breakEndTime : weekDay.breakEndTime;
      weekDay.isBreak = true;

      if (breakStartTime < startTime) {
        return res.status(200).send({
          status: false,
          message: "Break start time cannot be before start time.",
        });
      }

      if (breakEndTime < breakStartTime) {
        return res.status(200).send({
          status: false,
          message: "Break end time cannot be before break start time.",
        });
      }

      if (breakEndTime > endTime) {
        return res.status(200).send({
          status: false,
          message: "Break end time cannot be after end time.",
        });
      }

      if (endTime < startTime) {
        return res.status(200).send({
          status: false,
          message: "End time cannot be before start time.",
        });
      }
    }

    weekDay.timeSlot = req.body.timeSlot ? req.body.timeSlot : weekDay.timeSlot;

    await doctor.save();
    return res.status(200).send({
      status: true,
      message: "Your schedule updated successfully",
      data: doctor.schedule,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    if (!req.query.doctorId) {
      if (req.file) deleteFile(req.file);
      return res
        .status(200)
        .send({ status: false, message: "DoctorId is required" });
    }

    const doctor = await Doctor.findOne({
      _id: req.query.doctorId,
      isDelete: false,
    }).populate("service");

    if (!doctor) {
      if (req.file) deleteFile(req.file);
      return res
        .status(200)
        .send({ status: false, message: "Doctor not found" });
    }

    if (doctor.isBlock) {
      if (req.file) deleteFile(req.file);
      return res.status(200).send({
        status: false,
        message: "Your are blocked by admin,contact admin for further details",
      });
    }

    doctor.name = req.body.name || doctor.name;
    doctor.age = req.body.age || doctor.age;
    doctor.mobile = req.body.mobile || doctor.mobile;
    doctor.gender = req.body.gender || doctor.gender;
    doctor.dob = req.body.dob || doctor.dob;
    doctor.country = req.body.country || doctor.country;
    doctor.designation = req.body.designation || doctor.designation;
    doctor.countryCode = req.body.countryCode || doctor.countryCode;

    doctor.service = req.body.service
      ? req.body.service.split(",")
      : doctor.service;
    doctor.degree = req.body.degree
      ? req.body.degree.split(",")
      : doctor.degree;
    doctor.language = req.body.language
      ? req.body.language.split(",")
      : doctor.language;
    doctor.experience = req.body.experience || doctor.experience;
    doctor.charge = req.body.charge || doctor.charge;
    doctor.type = req.body.type || doctor.type;
    doctor.clinicName = req.body.clinicName || doctor.clinicName;
    doctor.address = req.body.address || doctor.address;
    doctor.awards = req.body.awards
      ? req.body.awards.split(",")
      : doctor.awards;
    doctor.yourSelf = req.body.yourSelf || doctor.yourSelf;
    doctor.education = req.body.education || doctor.education;

    doctor.expertise = req.body.expertise
      ? req.body.expertise.split(",")
      : doctor.expertise;
    doctor.experienceDetails = req.body.experienceDetails
      ? req.body.experienceDetails.split(",")
      : doctor.experienceDetails;
    doctor.image = req.file
      ? process.env.baseURL + req.file.path
      : doctor.image;

    await doctor.save();

    return res.status(200).send({
      status: true,
      message: "Doctor update successfully",
      data: doctor,
    });
  } catch (error) {
    if (req.file) deleteFile(req.file);
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    if (!req.query.doctorId || !req.query.day) {
      return res
        .status(200)
        .send({ status: false, message: "Invalid details" });
    }

    const day = moment(req.query.day, "dddd").format("dddd");
    console.log("day", day);

    const doctor = await Doctor.findOne({
      _id: req.query.doctorId,
      isDelete: false,
    }).populate("service");
    if (!doctor) {
      return res
        .status(200)
        .send({ status: false, message: "Doctor not found" });
    }
    if (doctor.isBlock) {
      return res.status(200).send({
        status: false,
        message: "Your are blocked by admin,contact admin for further details",
      });
    }

    const weekDay = doctor.schedule.find((time) => time.day === day);

    if (!weekDay) {
      return res.status(200).send({
        status: false,
        message: "Invalid day format or something went wrong",
      });
    }

    return res.status(200).send({
      status: true,
      message: "Your schedule update successfully",
      data: weekDay,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: error.message || "Internal Server Error",
    });
  }
};


