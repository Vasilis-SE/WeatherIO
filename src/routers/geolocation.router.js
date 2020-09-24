const express = require("express");
const router = new express.Router();

router.get('/geolocation/:address', (req, res) => {
    const address = req.params.address;
});

module.exports = router;