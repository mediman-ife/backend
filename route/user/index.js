const express = require("express");
const route = express.Router();

const user = require("./user.route");
const setting = require("./setting.route");
const doctor = require("./doctor.route");
const subPatient = require("./subPatient.route");
const wallet = require("./wallet.route");
const appointment = require("./appointment.route");
const coupon = require("./coupon.route");
const review = require("./review.route");
const banner = require("./banner.route");
const complain = require("./complain.route");
const notification = require("./notification.route");
const otp = require("./otp.route");
const service = require("./service.route");
const chatTopic = require("./chatTopic.route");
const chat = require("./chat.route");
const video = require("./video.route");
const chatBoat = require("./chatBoat.route");

route.use("/chat", chat);
route.use("/chatTopic", chatTopic);
route.use("/service", service);
route.use("/forgetPassword", otp);
route.use("/notification", notification);
route.use("/complain", complain);
route.use("/banner", banner);
route.use("/review", review);
route.use("/coupon", coupon);
route.use("/appointment", appointment);
route.use("/wallet", wallet);
route.use("/subPatient", subPatient);
route.use("/doctor", doctor);
route.use("/", user);
route.use("/setting", setting);
route.use("/video", video);
route.use("/chatBoat", chatBoat);

module.exports = route;
