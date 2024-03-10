require("dotenv").config();
const express = require("express");
const configExpress = require("./src/frameworks/express/config");
const routes = require("./src/adapters/routes/routes");
const app = express();

configExpress(app);

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
