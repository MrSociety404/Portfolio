import express from "express";
import nodemailer from "nodemailer";

import Mail from "../models/Mail";

const router = express.Router();

// Get all techs
router.post("/", async (req, res) => {
  try {
    if (!req.body.message && !req.body.name && !req.body.mail) {
      res.status(400).json({ message: "Missing body" });
      return;
    }
    const mail = await Mail.create(req.body);

    if ((await sendMail(req.body)) === true) {
      res.status(200).json(mail);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

const sendMail = async (body: any) => {
  try {
    // Setup mail info
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS,
      },
    });

    const mailOption = {
      from: '"Fabrice Cst" <info@fabricecst.com>',
      to: process.env.PERSONNALMAIL,
      subject: `Nouveau message de ${body.name}`,
      text: `Mail : ${body.mail} ; ${body.message}`,
    };

    const info = await transporter.sendMail(mailOption);

    console.log("[\x1b[35mMAIL\x1b[37m]  New message from %s", body.mail);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default router;
