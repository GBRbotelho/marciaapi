const creater = require("../../../usecase/company/client/creater");

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
};
