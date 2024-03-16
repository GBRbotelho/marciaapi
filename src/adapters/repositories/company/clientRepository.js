const clientSchema = require("../../../entity/company/client");

module.exports = {
  async create(clientData, db) {
    return await db.model("Client", clientSchema).create(clientData);
  },
  async update(clientId, clientData, db) {
    return await db
      .model("Client", clientSchema)
      .findByIdAndUpdate(clientId, clientData, { new: true });
  },
  async getAll(db) {
    return await db.model("Client", clientSchema).find();
  },
  async getById(clientId, db) {
    return await db.model("Client", clientSchema).findById(clientId);
  },
  async delete(clientId, db) {
    return await db.model("Client", clientSchema).findByIdAndDelete(clientId);
  },
};
