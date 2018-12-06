const express = require('express');
const router = express.Router();
const controller = require('../controllers/errorsEventsController').errorsEventsController;

router.get('/listErrorsEvents/:name', controller.buscaErrorsEvents);

router.get('/showErrorsEvents/:id', controller.showErrorsEvents);

module.exports = router;