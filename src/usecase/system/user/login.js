const repository = require("../../../adapters/repositories/system/userRepository");

const login = async (userData) => {
  try {
    // Verificar se o usuário existe
    const user = await repository.getByEmail(userData.email);
    if (!user) {
      return { success: false, message: "Usuário não encontrado" };
    }

    const isPasswordValid = user.password === userData.password;

    if (isPasswordValid) {
      return {
        success: true,
        message: "Usuário logado com sucesso",
        data: "token",
      };
    } else {
      return { success: false, message: "Senha incorreta", data: "" };
    }
  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    return { success: false, message: error };
  }
};

module.exports = login;
