const express = require("express");
const router = new express.Router();

router.get('/forecast/:lon/:lat', (req, res) => {
    let longitude = req.params.lon;
    let latitude = req.params.lat;
});

module.exports = router;