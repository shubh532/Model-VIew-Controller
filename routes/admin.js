const path = require('path');

const express = require('express');

const PeroductController =require("../Controllers/Products")

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',PeroductController.getAddProducts );

// /admin/add-product => POST
router.post('/add-product',PeroductController.PostAddProducts);

module.exports = router;

