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
      const db = req.systemDb;

      const created = await creater(data, db);

      if (created.success) {
        res.status(200).json(created);
      } else {
        res.status(404).json(created);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async updater(req, res) {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body;
      const db = req.systemDb;

      const updated = await updater(userId, updatedUserData, db);

      if (updated.success) {
        res.status(200).json(updated);
      } else {
        res.status(404).json(updated);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json("Erro interno do servidor");
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
      console.error("Erro ao deletar usuário:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async login(req, res) {
    try {
      const data = req.body;
      const db = req.systemDb;

      const isLogin = await login(data, db);

      if (isLogin.success) {
        res.status(200).json(isLogin);
      } else {
        res.status(404).json(isLogin);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async getByToken(req, res) {
    try {
      const token = req.headers.authorization;
      const db = req.systemDb;

      const userData = await getByToken(token, db);

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
      const db = req.systemDb;

      const confirmed = await confirmCode(userId, data, db);

      if (confirmed.success) {
        res.status(200).json(confirmed);
      } else {
        res.status(404).json(confirmed);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
  async refreshToken(req, res) {
    try {
      const db = req.systemDb;
      const newToken = await refreshToken(req.body, db);

      if (newToken.success) {
        res.status(200).json(newToken);
      } else {
        res.status(404).json(newToken);
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json("Erro interno do servidor");
    }
  },
};
