const Contact = require('../models/contact');

exports.contactFormController = (req, res) => {
    const { name, email, mobile, message } = req.body;

    const contact = new Contact({
        name: name,
        email: email,
        mobile: mobile,
        message: message
    })

    contact.save((err, save) => {
        if(err || !save) {
            return res.status(400).json({
                response: 0
            })
        }

        return res.status(200).json({
            response: 1
        })
    })
}

exports.getContactController = (req, res) => {
    Contact.find({})
    .exec((err, contact) => {
        if(err || !contact){
            return res.status(400).json({
                message: "Error In Fetching The Contacts"
            })
        }

        return res.status(200).json({
            contact
        })
    })
}