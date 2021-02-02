const express = require('express');
const jsonschema = require('jsonschema');
const ExpressError = require('./expressError');

const router = new express.Router();

router.get('/', async function (req, res, next) {
    try {
    } catch (error) {
        return next(err);
    }
});

module.exports = router;
