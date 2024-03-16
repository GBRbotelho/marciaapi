const repository = require("../../../adapters/repositories/company/clientRepository");

const getAll = async (db) => {
  try {
    const clients = await repository.getAll(db);

    return {
      success: true,
      message: "Clientes encontrados com sucesso",
      data: clients,
    };
  } catch (error) {
    console.error("Erro ao encontrar clientes:", error);
    return { success: false, message: error };
  }
};

module.exports = getAll;
