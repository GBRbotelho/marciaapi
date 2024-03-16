const connectMongo = require("../frameworks/mongoose/connect");

async function dbMiddleware(req, res, next) {
  const sistemaId = req.headers["sistema-id"];
  console.log("Sistema ID é : " + sistemaId);
  try {
    if (sistemaId) {
      req.systemDb = await connectMongo(sistemaId);
    } else {
      req.systemDb = await connectMongo("@system");
    }

    req.test = "Teste";
    next();
  } catch (error) {
    next(error); // Passa o erro para o próximo middleware de tratamento de erro
  }
}

module.exports = dbMiddleware;
