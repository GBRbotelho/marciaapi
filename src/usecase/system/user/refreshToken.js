const jwtService = require("../../../frameworks/jsonwebtoken/jwtService");

module.exports = async (data) => {
  try {
    const { token } = data;
    console.log(data);

    if (!token) {
      return { success: false, message: "Token não fornecido", data: "" };
    }

    const decodedToken = jwtService.verifyToken(token);
    if (!decodedToken) {
      return { success: false, message: "Senha incorreta", data: "" };
    }

    const newToken = jwtService.createToken({
      userId: decodedToken.userId,
      email: decodedToken.email,
    });

    return {
      success: true,
      message: "Token renovado com sucesso",
      data: newToken,
    };
  } catch (error) {
    throw error;
  }
};
