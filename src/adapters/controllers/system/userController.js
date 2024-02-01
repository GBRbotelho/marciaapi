const updater = require("../../../usecase/system/user/updater");
const creater = require("../../../usecase/system/user/creater");
const deleter = require("../../../usecase/system/user/deleter");
const login = require("../../../usecase/system/user/login");
const getByToken = require("../../../usecase/system/user/getByToken");
const confirmCode = require("../../../usecase/system/user/confirmCode");
const refreshToken = require("../../../usecase/system/user/refreshToken");

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
  async login(req, res) {
    try {
      const data = req.body;

      const isLogin = await login(data);

      if (isLogin.success) {
        res.status(200).json(isLogin);
      } else {
        res.status(404).send(isLogin);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async getByToken(req, res) {
    try {
      const token = req.headers.authorization;

      const userData = await getByToken(token);

      if (userData) {
        return res.status(200).json(userData);
      } else {
        return res.status(402).json(userData);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async confirmCodeEmail(req, res) {
    try {
      const userId = req.params.id;
      const data = req.body;
      console.log("Data é");
      console.log(data);
      const confirmed = await confirmCode(userId, data);

      if (confirmed.success) {
        res.status(200).json(confirmed);
      } else {
        res.status(404).send(confirmed);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
  async refreshToken(req, res) {
    try {
      const newToken = await refreshToken(req.body);

      if (newToken.success) {
        res.status(200).json(newToken);
      } else {
        res.status(404).send(newToken);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).send("Erro interno do servidor");
    }
  },
};
