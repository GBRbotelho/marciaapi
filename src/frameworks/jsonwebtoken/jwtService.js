const jwt = require("jsonwebtoken");

function createToken(data) {
  const expiresIn = process.env.JWT_EXPIRES_IN;
  const algorithm = process.env.JWT_ALGORITHM;
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn, algorithm });
}

function verifyToken(token) {
  try {
    const algorithm = process.env.JWT_ALGORITHM;
    return jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: [algorithm],
    });
  } catch (error) {
    return null;
  }
}

module.exports = {
  createToken,
  verifyToken,
};
