const repository = require("../../../adapters/repositories/company/clientRepository");

const deleter = async (userId, db) => {
  try {
    console.log(userId);
    // Verificar se o usuário existe
    const user = await repository.getById(userId, db);
    if (!user) {
      return { success: false, message: "Cliente não encontrado" };
    }

    const deletedUser = await repository.delete(userId, db);
    return { success: true, message: "Cliente deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    return { success: false, message: error };
  }
};

module.exports = deleter;
