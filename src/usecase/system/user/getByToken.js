const repository = require("../../../adapters/repositories/system/userRepository");
const jwtService = require("../../../frameworks/jsonwebtoken/jwtService");

const getByToken = async (token) => {
  try {
    if (!token) {
      return { success: false, message: "Token não recebido" };
    }

    const decoded = jwtService.verifyToken(token);
    if (!decoded) {
      return { success: false, message: "Token invalido" };
    }
    const user = await repository.getById(decoded.userId);
    user.emailConfirmationCode = null;
    return {
      success: true,
      message: "User encontrado com sucesso",
      data: user,
    };
  } catch (error) {
    console.log("Erro interno no servidor: " + error);
    return { success: false, message: "Erro interno no servidor" };
  }
};

module.exports = getByToken;
