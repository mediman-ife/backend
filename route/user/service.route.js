const express = require("express");
const route = express.Router();
const serviceController = require("../../controller/user/service.controller");
const checkAccess = require("../../middleware/checkAccess");

route.get('/', checkAccess(), serviceController.getAll);


module.exports = route;