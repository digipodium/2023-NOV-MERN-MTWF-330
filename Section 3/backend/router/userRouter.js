const express = require('express');
const Model = require('../model/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('Add response from user Router');
});

router.get('/getall', (req, res) => {
    res.send('Getall response from user Router');
});
router.get('/getbyid', (req, res) => {
    res.send('Get by id response from user Router');
});
router.get('/update', (req, res) => {
    res.send('Update response from user Router');
});
router.get('/delete', (req, res) => {
    res.send('Delete response from user Router');
});




// getall
// getbyid
// update
// delete

module.exports = router;