const User = require("../../../entity/system/user");

module.exports = {
  async create(userData) {
    return await User.create(userData);
  },
  async getByEmail(email) {
    return await User.findOne({ email });
  },
  async getByCpf(cpf) {
    return await User.findOne({ cpf });
  },
  async update(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  },
  async getAll() {
    return await User.find();
  },
  async getById(userId) {
    return await User.findById(userId);
  },
  async delete(clientId) {
    return await User.findByIdAndDelete(clientId);
  },
};
