const creater = require("../../../usecase/system/company/creater");
const geyByAdmin = require("../../../usecase/system/company/getByAdmin");

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

      const system = await geyByAdmin(id, db);

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
