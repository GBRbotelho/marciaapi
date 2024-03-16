const creater = require("../../../usecase/system/company/creater");
const getByAdmin = require("../../../usecase/system/company/getByAdmin");
const getById = require("../../../usecase/system/company/getById");

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
      console.error("Erro ao criar ambiente:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async getByAdmin(req, res) {
    try {
      const { id } = req.params;
      const db = req.systemDb;

      const system = await getByAdmin(id, db);

      if (system.success) {
        res.status(200).json(system);
      } else {
        res.status(404).json(system);
      }
    } catch (error) {
      console.error("Erro ao encontrar ambiente:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async getById(req, res) {
    try {
      const { id } = req.params;
      const db = req.systemDb;

      const system = await getById(id, db);

      if (system.success) {
        res.status(200).json(system);
      } else {
        res.status(404).json(system);
      }
    } catch (error) {
      console.error("Erro ao encontrar ambiente:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
};
