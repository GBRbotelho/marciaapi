const clientSchema = require("../../../entity/company/client");

module.exports = {
  async create(clientData, db) {
    return await db.model("Client", clientSchema).create(clientData);
  },
  async update(clientId, clientData) {
    return await db
      .model("Client", clientSchema)
      .findByIdAndUpdate(clientId, clientData, { new: true });
  },
  async getAll() {
    return await db.model("Client", clientSchema).find();
  },
  async getById(clientId) {
    return await db.model("Client", clientSchema).findById(clientId);
  },
  async delete(clientId) {
    return await db.model("Client", clientSchema).findByIdAndDelete(clientId);
  },
};
