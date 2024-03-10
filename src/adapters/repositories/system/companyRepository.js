const Company = require("../../../entity/system/company");

module.exports = {
  async create(companyData) {
    return await Company.create(companyData);
  },
  async update(companyId, companyData) {
    return await Company.findByIdAndUpdate(companyId, companyData, {
      new: true,
    });
  },
  async getByAdmin(admin) {
    return await Company.find({ admin });
  },
  async getAll() {
    return await Company.find();
  },
  async getById(companyId) {
    return await Company.findById(companyId);
  },
  async delete(clientId) {
    return await Company.findByIdAndDelete(clientId);
  },
};
