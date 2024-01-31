const repository = require("../../../adapters/repositories/system/userRepository");

module.exports = async (userId, data) => {
  console.log(data.code);
  const user = await repository.getById(userId);

  if (!user) {
    return { success: false, message: "Usuário não encontrado" };
  }
  console.log(user.code);

  if (user.code === data.code) {
    user.isEmailVerified = "YES";
    await repository.update(userId, user);

    return { success: true, message: "Codigo confirmado com sucesso" };
  } else {
    return { success: false, message: "Codigo incorreto" };
  }
};
