const companySchema = require("../../../entity/system/company");

module.exports = {
  async create(companyData, db) {
    return await db.model("Company", companySchema).create(companyData);
  },
  async update(companyId, companyData) {
    return await db
      .model("Company", companySchema)
      .findByIdAndUpdate(companyId, companyData, {
        new: true,
      });
  },
  async getByAdmin(admin, db) {
    return await db.model("Company", companySchema).find({ admin });
  },
  async getAll(db) {
    return await db.model("Company", companySchema).find();
  },
  async getById(companyId, db) {
    return await db.model("Company", companySchema).findById(companyId);
  },
  async delete(clientId, db) {
    return await db.model("Company", companySchema).findByIdAndDelete(clientId);
  },
};
