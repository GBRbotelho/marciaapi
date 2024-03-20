const creater = require("../../../usecase/company/client/creater");
const deleter = require("../../../usecase/company/client/delete");
const getAll = require("../../../usecase/company/client/getAll");

module.exports = {
  async creater(req, res) {
    try {
      const data = req.body;
      const db = req.systemDb;

      const created = await creater(data, db);

      if (created.success) {
        res.status(200).json(created);
      } else {
        res.status(404).json(created);
      }
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async getAll(req, res) {
    try {
      const db = req.systemDb;

      const clients = await getAll(db);

      if (clients.success) {
        res.status(200).json(clients);
      } else {
        res.status(404).json(clients);
      }
    } catch (error) {
      console.error("Erro ao encontrar clientes:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async deleter(req, res) {
    try {
      const userId = req.params.id;
      const db = req.systemDb;

      const deleted = await deleter(userId, db);

      if (deleted.success) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json(deleted);
      }
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
};
