const repository = require("../../../adapters/repositories/system/userRepository");
const bcrypt = require("bcrypt");
const jwtService = require("../../../frameworks/jsonwebtoken/jwtService");

const login = async (userData) => {
  try {
    // Verificar se o usuário existe
    const user = await repository.getByEmail(userData.email);
    if (!user) {
      return { success: false, message: "Usuário não encontrado" };
    }

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (isPasswordValid) {
      const token = jwtService.createToken({
        userId: user._id,
      });

      return {
        success: true,
        message: "Usuário logado com sucesso",
        data: token,
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
