const express = require('express');
const router = express.Router();


router.get('/survey', (req, res) => {
    res.render('survey');
});

module.exports = router;