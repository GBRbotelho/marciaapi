const repository = require("../../../adapters/repositories/system/companyRepository");

const getById = async (id, db) => {
  try {
    const company = await repository.getById(id, db);

    if (!company) {
      return {
        success: false,
        message: "Ambiente não encontrado",
      };
    }

    return {
      success: true,
      message: "Ambiente encontrado com sucesso",
      data: company,
    };
  } catch (error) {
    console.error("Erro ao encontrar ambiente:", error);
    return { success: false, message: error };
  }
};

module.exports = getById;
