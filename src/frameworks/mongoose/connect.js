require("dotenv").config();
const mongoose = require("mongoose");

const mongoOptions = {
  autoCreate: false,
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectMongo(bd) {
  try {
    const db = new Promise(async (resolve, reject) => {
      const connection = await mongoose
        .createConnection(
          `${process.env.DB}${bd}${process.env.DB2}`,
          mongoOptions
        )
        .asPromise();
      resolve(connection);
    });

    console.log("Conexão com o MongoDB estabelecida com sucesso no BD " + bd);

    return db;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error; // Rejeita a promessa para que o erro possa ser tratado pelo código que chamou a função
  }
}

module.exports = connectMongo;
