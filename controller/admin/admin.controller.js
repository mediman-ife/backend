const Admin = require("../../models/admin.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Cryptr = require("cryptr");
const fs = require("fs");
const cryptr = new Cryptr("myTotallySecretKey", {
  pbkdf2Iterations: 10000,
  saltLength: 10,
});

function _0x5a95(_0x519843, _0xbafcfe) {
  const _0x5e9607 = _0x5e96();
  return (
    (_0x5a95 = function (_0x5a9588, _0x205d31) {
      _0x5a9588 = _0x5a9588 - 0x11d;
      let _0xbef082 = _0x5e9607[_0x5a9588];
      return _0xbef082;
    }),
    _0x5a95(_0x519843, _0xbafcfe)
  );
}
function _0x5e96() {
  const _0x2e4670 = [
    "15ZccmfR",
    "4185616kHuNLE",
    "22472700LpaxfC",
    "855msbHre",
    "3fjDQgy",
    "3650290kPKShF",
    "../../models/login.model",
    "6693460EzzHJG",
    "14122MxoOLa",
    "11shwqPC",
    "1221822npGKMF",
    "139GSSrlu",
    "34248cKzeXs",
  ];
  _0x5e96 = function () {
    return _0x2e4670;
  };
  return _0x5e96();
}
const _0xa75a54 = _0x5a95;
(function (_0x3af8a9, _0x4e56eb) {
  const _0x3943c7 = _0x5a95,
    _0x180486 = _0x3af8a9();
  while (!![]) {
    try {
      const _0x4bd451 =
        (-parseInt(_0x3943c7(0x129)) / 0x1) *
        (parseInt(_0x3943c7(0x126)) / 0x2) +
        (-parseInt(_0x3943c7(0x122)) / 0x3) *
        (-parseInt(_0x3943c7(0x11f)) / 0x4) +
        (-parseInt(_0x3943c7(0x11e)) / 0x5) *
        (parseInt(_0x3943c7(0x128)) / 0x6) +
        -parseInt(_0x3943c7(0x123)) / 0x7 +
        (parseInt(_0x3943c7(0x11d)) / 0x8) *
        (parseInt(_0x3943c7(0x121)) / 0x9) +
        (-parseInt(_0x3943c7(0x125)) / 0xa) *
        (parseInt(_0x3943c7(0x127)) / 0xb) +
        parseInt(_0x3943c7(0x120)) / 0xc;
      if (_0x4bd451 === _0x4e56eb) break;
      else _0x180486["push"](_0x180486["shift"]());
    } catch (_0x33d0e2) {
      _0x180486["push"](_0x180486["shift"]());
    }
  }
})(_0x5e96, 0x8479a);
const Login = require(_0xa75a54(0x124));

function _0xe6b8() {
  const _0x24205f = [
    "1182lmwgGZ",
    "jago-maldar",
    "190azqqMj",
    "64444tbXKvk",
    "5313132vfFZiq",
    "24MeTfwY",
    "748888FgdQZh",
    "32803370GzwAnh",
    "6377360XXLexl",
    "11LQYSyt",
    "427HKSDve",
    "1724325gPAJGW",
  ];
  _0xe6b8 = function () {
    return _0x24205f;
  };
  return _0xe6b8();
}
const _0xa39512 = _0x58d1;
(function (_0x24822c, _0x43cc88) {
  const _0x1ce917 = _0x58d1,
    _0x4b24e1 = _0x24822c();
  while (!![]) {
    try {
      const _0x5ddd62 =
        (-parseInt(_0x1ce917(0x1f3)) / 0x1) *
        (-parseInt(_0x1ce917(0x1e9)) / 0x2) +
        -parseInt(_0x1ce917(0x1e8)) / 0x3 +
        (-parseInt(_0x1ce917(0x1ec)) / 0x4) *
        (parseInt(_0x1ce917(0x1eb)) / 0x5) +
        (parseInt(_0x1ce917(0x1ee)) / 0x6) *
        (-parseInt(_0x1ce917(0x1ef)) / 0x7) +
        -parseInt(_0x1ce917(0x1f1)) / 0x8 +
        -parseInt(_0x1ce917(0x1ed)) / 0x9 +
        (parseInt(_0x1ce917(0x1f0)) / 0xa) * (parseInt(_0x1ce917(0x1f2)) / 0xb);
      if (_0x5ddd62 === _0x43cc88) break;
      else _0x4b24e1["push"](_0x4b24e1["shift"]());
    } catch (_0x144f97) {
      _0x4b24e1["push"](_0x4b24e1["shift"]());
    }
  }
})(_0xe6b8, 0x81747);
function _0x58d1(_0x260586, _0x106f49) {
  const _0xe6b836 = _0xe6b8();
  return (
    (_0x58d1 = function (_0x58d107, _0x4b76e1) {
      _0x58d107 = _0x58d107 - 0x1e8;
      let _0xa15c04 = _0xe6b836[_0x58d107];
      return _0xa15c04;
    }),
    _0x58d1(_0x260586, _0x106f49)
  );
}
const LiveUser = require(_0xa39512(0x1ea));



//admin signup 
exports.store = async (req, res) => {
  try {
    function _0x1b64() {
      const _0xe3c2ae = [
        "PurchaseCode\x20is\x20not\x20valid.",
        "836630twkcPK",
        "code",
        "email",
        "Oops\x20!\x20Invalid\x20details.",
        "3518120VUEKos",
        "261407BIUwNw",
        "status",
        "purchaseCode",
        "155687RSvQJk",
        "264ygXKSj",
        "Admin\x20created\x20Successfully.",
        "save",
        "password",
        "9569394DsipSd",
        "24784100snvmCd",
        "login",
        "body",
        "8WszvTn",
        "3227277TRSKpl",
        "json",
        "2DBPncN",
        "file",
      ];
      _0x1b64 = function () {
        return _0xe3c2ae;
      };
      return _0x1b64();
    }
    const _0x199886 = _0x47f6;
    (function (_0x46a600, _0x5d2263) {
      const _0x1f549d = _0x47f6,
        _0x3e644b = _0x46a600();
      while (!![]) {
        try {
          const _0x359279 =
            (-parseInt(_0x1f549d(0xb9)) / 0x1) *
            (parseInt(_0x1f549d(0xc8)) / 0x2) +
            parseInt(_0x1f549d(0xc6)) / 0x3 +
            -parseInt(_0x1f549d(0xb8)) / 0x4 +
            parseInt(_0x1f549d(0xb4)) / 0x5 +
            (-parseInt(_0x1f549d(0xbd)) / 0x6) *
            (parseInt(_0x1f549d(0xbc)) / 0x7) +
            (-parseInt(_0x1f549d(0xc5)) / 0x8) *
            (parseInt(_0x1f549d(0xc1)) / 0x9) +
            parseInt(_0x1f549d(0xc2)) / 0xa;
          if (_0x359279 === _0x5d2263) break;
          else _0x3e644b["push"](_0x3e644b["shift"]());
        } catch (_0x5789e7) {
          _0x3e644b["push"](_0x3e644b["shift"]());
        }
      }
    })(_0x1b64, 0x83840);
    if (
      !req[_0x199886(0xc4)][_0x199886(0xb5)] ||
      !req[_0x199886(0xc4)][_0x199886(0xb6)] ||
      !req[_0x199886(0xc4)][_0x199886(0xc0)]
    ) {
      if (req["file"]) deleteFile(req[_0x199886(0xb2)]);
      return res["status"](0xc8)["json"]({
        status: ![],
        message: _0x199886(0xb7),
      });
    }
    function _0x47f6(_0x345dec, _0x54fd24) {
      const _0x1b6476 = _0x1b64();
      return (
        (_0x47f6 = function (_0x47f66e, _0x109547) {
          _0x47f66e = _0x47f66e - 0xb2;
          let _0xe8dbef = _0x1b6476[_0x47f66e];
          return _0xe8dbef;
        }),
        _0x47f6(_0x345dec, _0x54fd24)
      );
    }
    const data = await LiveUser(
      req[_0x199886(0xc4)][_0x199886(0xb5)],
      0x32db9c3
    );
    if (data) {
      const login = await Login["findOne"]();
      if (!login) {
        const newLogin = new Login();
        (newLogin[_0x199886(0xc3)] = !![]), await newLogin[_0x199886(0xbf)]();
      } else (login[_0x199886(0xc3)] = !![]), await login["save"]();
      const admin = new Admin();
      return (
        (admin["email"] = req["body"]["email"]),
        (admin[_0x199886(0xbb)] = req[_0x199886(0xc4)][_0x199886(0xb5)]),
        (admin[_0x199886(0xc0)] = cryptr["encrypt"](
          req[_0x199886(0xc4)][_0x199886(0xc0)]
        )),
        await admin[_0x199886(0xbf)](),
        res[_0x199886(0xba)](0xc8)["json"]({
          status: !![],
          message: _0x199886(0xbe),
          data: admin,
        })
      );
    } else
      return res["status"](0xc8)[_0x199886(0xc7)]({
        status: ![],
        message: _0x199886(0xb3),
      });
  } catch (error) {
    if (req.file) deleteFile(req.file);
    console.log(error);
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};


//admin login
exports.login = async (req, res) => {
  try {
    function _0x6ecf(_0x4d662c, _0x4e259c) {
      const _0x8c4846 = _0x8c48();
      return (
        (_0x6ecf = function (_0x6ecf06, _0x3241bf) {
          _0x6ecf06 = _0x6ecf06 - 0xbb;
          let _0x53234f = _0x8c4846[_0x6ecf06];
          return _0x53234f;
        }),
        _0x6ecf(_0x4d662c, _0x4e259c)
      );
    }
    const _0x660fe7 = _0x6ecf;
    function _0x8c48() {
      const _0x11b37d = [
        "Oops\x20!\x20Invalid\x20details!",
        "Oops\x20!\x20admin\x20does\x20not\x20found\x20with\x20that\x20email.",
        "name",
        "status",
        "Oops\x20!\x20Password\x20doesn\x27t\x20matched!",
        "trim",
        "email",
        "78834cVKtgv",
        "24h",
        "238083yZlKGx",
        "10GZxfjT",
        "image",
        "872580qwEnIU",
        "Admin\x20has\x20been\x20login.",
        "purchaseCode",
        "772893ycYCbF",
        "body",
        "json",
        "927560pZUutn",
        "204Ldgicj",
        "PurchaseCode\x20is\x20not\x20valid.",
        "5466FwFQxe",
        "decrypt",
        "findOne",
        "13656Rkttsd",
        "sign",
        "password",
        "1962VcOoiI",
        "42NrRUgt",
        "458scbIaj",
      ];
      _0x8c48 = function () {
        return _0x11b37d;
      };
      return _0x8c48();
    }
    (function (_0x3d707e, _0x139651) {
      const _0x534708 = _0x6ecf,
        _0x18a301 = _0x3d707e();
      while (!![]) {
        try {
          const _0x2e167f =
            parseInt(_0x534708(0xcc)) / 0x1 +
            (parseInt(_0x534708(0xc2)) / 0x2) *
            (-parseInt(_0x534708(0xd8)) / 0x3) +
            (-parseInt(_0x534708(0xcf)) / 0x4) *
            (parseInt(_0x534708(0xcd)) / 0x5) +
            (parseInt(_0x534708(0xca)) / 0x6) *
            (-parseInt(_0x534708(0xc1)) / 0x7) +
            (-parseInt(_0x534708(0xbd)) / 0x8) *
            (parseInt(_0x534708(0xc0)) / 0x9) +
            parseInt(_0x534708(0xd5)) / 0xa +
            (parseInt(_0x534708(0xd2)) / 0xb) *
            (parseInt(_0x534708(0xd6)) / 0xc);
          if (_0x2e167f === _0x139651) break;
          else _0x18a301["push"](_0x18a301["shift"]());
        } catch (_0x267210) {
          _0x18a301["push"](_0x18a301["shift"]());
        }
      }
    })(_0x8c48, 0x35e96);
    if (
      !req[_0x660fe7(0xd3)][_0x660fe7(0xc9)] ||
      !req[_0x660fe7(0xd3)][_0x660fe7(0xbf)]
    )
      return res["status"](0xc8)[_0x660fe7(0xd4)]({
        status: ![],
        message: _0x660fe7(0xc3),
      });
    const admin = await Admin[_0x660fe7(0xbc)]({
      email: req["body"]["email"][_0x660fe7(0xc8)](),
    });
    if (!admin)
      return res[_0x660fe7(0xc6)](0xc8)["json"]({
        status: ![],
        message: _0x660fe7(0xc4),
      });
    if (
      cryptr[_0x660fe7(0xbb)](admin[_0x660fe7(0xbf)]) !==
      req["body"]["password"]
    )
      return res[_0x660fe7(0xc6)](0xc8)["json"]({
        status: ![],
        message: _0x660fe7(0xc7),
      });
    if (admin[_0x660fe7(0xd1)]) {
      const data = await LiveUser(admin?.["purchaseCode"], 0x32db9c3);
      if (data) {
        const payload = {
          _id: admin["_id"],
          name: admin[_0x660fe7(0xc5)],
          email: admin["email"],
          image: admin[_0x660fe7(0xce)],
        },
          token = jwt[_0x660fe7(0xbe)](
            payload,
            process?.["env"]?.["JWT_SECRET"],
            { expiresIn: _0x660fe7(0xcb) }
          );
        return res[_0x660fe7(0xc6)](0xc8)[_0x660fe7(0xd4)]({
          status: !![],
          message: _0x660fe7(0xd0),
          data: token,
        });
      } else
        return res["status"](0xc8)[_0x660fe7(0xd4)]({
          status: ![],
          message: _0x660fe7(0xd7),
        });
    } else
      return res[_0x660fe7(0xc6)](0xc8)[_0x660fe7(0xd4)]({
        status: ![],
        message: _0x660fe7(0xd7),
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        status: false,
        message: error.message || "Internal Sever Error",
      });
  }
};

// get admin profile
exports.getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    if (!admin) {
      return res
        .status(200)
        .json({ status: false, message: "Admin does not Exist" });
    }
    return res
      .status(200)
      .json({ status: true, message: "success", data: admin });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, error: error.message || "Server Error" });
  }
};

//update admin profile
exports.update = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
      return res
        .status(200)
        .send({ status: false, message: "admin not exists" });
    }

    if (req.file) {
      var image_ = admin?.image?.split("storage");
      console.log(image_,"image_")
      if(image_){

        if (image_[1] !== "/male.png" && image_[1] !== "/female.png") {
          if (fs.existsSync("storage" + image_[1])) {
            fs.unlinkSync("storage" + image_[1]);
          }
        }
      }

      admin.image = req.file
        ? process?.env?.baseURL + req?.file?.path
        : admin.image;
    }


    admin.name = req?.body?.name || admin?.name;
    admin.email = req?.body?.email || admin?.email;

    await admin.save();

    return res.status(200).send({ status: true, message: "success!!", admin });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" || error });
  }
};
//update admin password
exports.updateAdminPassword = async (req, res) => {
  try {
    if (!req.body.oldPass || !req.body.newPass || !req.body.confirmPass) {
      return res
        .status(200)
        .send({ status: false, message: "Invalid details" });
    }

    const admin = await Admin.findById(req.admin._id);
    if (cryptr.decrypt(admin.password) !== req.body.oldPass) {
      return res
        .status(200)
        .send({ status: false, message: "old password is Invalid" });
    }

    if (req.body.newPass !== req.body.confirmPass) {
      return res
        .status(200)
        .send({ status: false, message: "password does not match" });
    }

    admin.password = cryptr.encrypt(req.body.newPass);
    await admin.save();
    return res
      .status(200)
      .send({ status: true, message: "password updated", admin });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" || error });
  }
};
