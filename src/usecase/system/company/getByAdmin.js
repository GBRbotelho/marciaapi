const repository = require("../../../adapters/repositories/system/companyRepository");

const geyByAdmin = async (id) => {
  try {
    const company = await repository.getByAdmin(id);

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

module.exports = geyByAdmin;
