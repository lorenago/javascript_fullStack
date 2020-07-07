const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

const { unlink } = require('fs-extra');

const Email = require('../models/Email');

router.post('/', async (req, res) => {
    const { remitente, asunto, mensaje } = req.body;
    const newEmail = new Email({ remitente, asunto, mensaje });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL.USER || '', // Cambialo por tu email
            pass: process.env.EMAIL.PASSWORD || '' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `${remitente}`,
        to: process.env.EMAIL.USER || '', // Cambia esta parte por el destinatario
        subject: asunto,
        html: `
            <strong>Nombre:</strong> ${remitente} <br/>
            <strong>Mensaje:</strong> ${mensaje}
        `
    };
    const emailSent = await transporter.sendMail(mailOptions, function (err, info) {
        if (err) { console.log(err) }
        else { console.log(info); }
    });
    res.json({ message: 'Email sent' });
});

module.exports = router;