const repository = require("../../../adapters/repositories/system/userRepository");

const deleter = async (userId) => {
  try {
    // Verificar se o usuário existe
    const user = await repository.getById(userId);
    if (!user) {
      return { success: false, message: "Usuário não encontrado" };
    }

    const deletedUser = await repository.delete(userId);
    return { success: true, message: "Usuário deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return { success: false, message: error };
  }
};

module.exports = deleter;
