const nodemailer = require("nodemailer");

// Função para configurar o transporte do Nodemailer
function configureTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL, // Substitua pelo seu e-mail
      pass: process.env.NODEMAILER_PASS, // Substitua pela sua senha ou token de aplicativo
    },
  });
}

module.exports = {
  configureTransporter,
};
