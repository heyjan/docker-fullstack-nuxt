require("dotenv").config();
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const jwt = require("jsonwebtoken");

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);

const sendConfirmationEmail = async (user) => {
  const token = await jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET_KEY
  );

  const url = `http://localhost/confirmation/${token}`;

  transport
    .sendMail({
      from: "no-reply@heyjan.de",
      to: `${user.name} <${user.email}>`,
      subject: "Confirmation Email",
      html: `Confirmation Email <a href=${url}> ${url}</a href>`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch(() => {
      console.log("Emails not sent");
    });
};

exports.sendConfirmationEmail = sendConfirmationEmail;
