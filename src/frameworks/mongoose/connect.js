require("dotenv").config();
const mongoose = require("mongoose");

function connectMongo(bd) {
  mongoose
    .connect(`${process.env.DB}${bd}`, {
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
