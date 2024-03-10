const repository = require("../../../adapters/repositories/system/companyRepository");

const creater = async (data) => {
  try {
    const { name, admin, plan, active, dateInitial, dateFinal } = data;

    const newCompany = {
      name,
      admin,
      plan,
      active,
      dateInitial,
      dateFinal,
    };

    const response = await repository.create(newCompany);

    return {
      success: true,
      message: "Ambiente criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar ambiente:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
