const express = require("express");
const router = express.Router();


router.use('/v1/solarwind/', require("./solarwind"))
module.exports = router;
