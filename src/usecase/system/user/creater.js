const repository = require("../../../adapters/repositories/system/userRepository");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../../../frameworks/gmailapi/gmailService");
const generateRandomCode = require("../../../utils/generateRandomCode");

const creater = async (data, db) => {
  try {
    const { name, email, password, companies, cpf } = data;

    const emailValidate = await repository.getByEmail(email, db);
    if (emailValidate) {
      return {
        success: false,
        message: "Este email ja esta cadastrado",
      };
    }

    const cpfValidate = await repository.getByCpf(cpf, db);
    if (cpfValidate) {
      return {
        success: false,
        message: "Este CPF ja esta cadastrado",
      };
    }

    //Criação do codigo de 6 digitos
    const code = generateRandomCode(6);

    const newUser = {
      name,
      email,
      password,
      companies,
      cpf,
      code,
    };

    newUser.password = await bcrypt.hash(newUser.password, 10);

    const response = await repository.create(newUser, db);

    sendEmail(
      email,
      "Codigo de Segurança",
      "Seu codigo de segurança é " + code
    );

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
