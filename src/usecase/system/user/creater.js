const repository = require("../../../adapters/repositories/system/userRepository");

const creater = async (data) => {
  try {
    const { name, email, password, companies, cpf } = data;

    const newUser = {
      name,
      email,
      password,
      companies,
      cpf,
    };

    const response = await repository.create(newUser);

    return {
      success: true,
      message: "Usuário criado com sucesso",
      data: response,
    };
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return { success: false, message: error };
  }
};

module.exports = creater;
