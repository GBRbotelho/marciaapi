const updater = require("../../../usecase/system/user/updater");
const creater = require("../../../usecase/system/user/creater");
const deleter = require("../../../usecase/system/user/deleter");

module.exports = {
  async creater(req, res) {
    try {
      const data = req.body;

      const created = await creater(data);

      if (created.success) {
        res.status(200).json(created);
      } else {
        res.status(404).send(created);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async updater(req, res) {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body;

      const updated = await updater(userId, updatedUserData);

      if (updated.success) {
        res.status(200).json(updated);
      } else {
        res.status(404).send(updated);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async deleter(req, res) {
    try {
      const userId = req.params.id;

      const deleted = await deleter(userId);

      if (deleted.success) {
        res.status(200).json(deleted);
      } else {
        res.status(404).send(deleted);
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
};
