require("dotenv").config();
const mongoose = require("mongoose");

function connectMongo(bd) {
  console.log(`${process.env.DB}${bd}${process.env.DB2}`);
  mongoose
    .connect(`${process.env.DB}${bd}${process.env.DB2}`, {
      autoCreate: false,
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexão com o MongoDB estabelecida com sucesso no BD " + bd);
    })
    .catch((err) => {
      console.error("Erro ao conectar ao MongoDB:", err);
    });
}

module.exports = connectMongo;
