const path = require('path');

const express = require('express');

const PeroductController=require("../Controllers/Products");
const adminData = require('./admin');

const router = express.Router();

router.get('/',PeroductController.getProducts );

module.exports = router;
