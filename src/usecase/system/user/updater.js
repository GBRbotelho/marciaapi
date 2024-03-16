const repository = require("../../../adapters/repositories/system/userRepository");

const updater = async (userId, userData, db) => {
  try {
    // Verificar se o usuário existe
    const user = await repository.getById(userId);
    if (!user) {
      return { success: false, message: "Usuário não encontrado" };
    }

    const updatedUser = await repository.update(userId, userData, db);
    return { success: true, message: "Usuário atualizado com sucesso" };
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return { success: false, message: error };
  }
};

module.exports = updater;
