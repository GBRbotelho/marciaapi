const repository = require("../../../adapters/repositories/company/clientRepository");

const creater = async (data, db) => {
  try {
    const { name, civilName, birthday, cpf, phone, gender, email, knowMyWork } =
      data;

    const newClient = {
      name,
      civilName,
      birthday,
      cpf,
      phone,
      gender,
      email,
      knowMyWork,
    };

    const response = await repository.create(newClient, db);

    return {
      success: true,
      message: "Cliente criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar Cliente:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
