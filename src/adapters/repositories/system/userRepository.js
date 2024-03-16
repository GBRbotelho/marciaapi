const userSchema = require("../../../entity/system/user");

module.exports = {
  async create(userData, db) {
    return await db.model("User", userSchema).create(userData);
  },
  async getByEmail(email, db) {
    return await db.model("User", userSchema).findOne({ email });
  },
  async getByCpf(cpf, db) {
    return await db.model("User", userSchema).findOne({ cpf });
  },
  async update(userId, userData, db) {
    return await db
      .model("User", userSchema)
      .findByIdAndUpdate(userId, userData, { new: true });
  },
  async getAll(db) {
    return await db.model("User", userSchema).find();
  },
  async getById(userId, db) {
    return await db.model("User", userSchema).findById(userId);
  },
  async delete(clientId, db) {
    return await db.model("User", userSchema).findByIdAndDelete(clientId);
  },
};
