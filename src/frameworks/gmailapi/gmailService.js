// gmailapi/gmailService.js

const { configureTransporter } = require("./config");

// Função para enviar um e-mail usando o Nodemailer
async function sendEmail(to, subject, body) {
  const transporter = configureTransporter();

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL, // Substitua pelo seu e-mail
    to: to,
    subject: subject,
    text: body,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info.response);
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error.message);
  }
}

module.exports = {
  sendEmail,
};
