const router = require('express').Router();

const { contactFormController, getContactController } = require('../controllers/contact.controller.js');

router.post('/getContactForm', contactFormController);
router.get('/getContact', getContactController);

module.exports = router;