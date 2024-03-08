require("dotenv").config();
const mongoose = require("mongoose");

async function connectMongo(bd) {
  try {
    console.log(`${process.env.DB}${bd}${process.env.DB2}`);
    await mongoose.connect(`${process.env.DB}${bd}${process.env.DB2}`, {
      autoCreate: false,
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso no BD " + bd);
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error; // Rejeita a promessa para que o erro possa ser tratado pelo código que chamou a função
  }
}

module.exports = connectMongo;
