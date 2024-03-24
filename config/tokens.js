import jwt from 'jsonwebtoken';

const SECRET = 'TurnosWebApp';

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '2h' });
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

export default { generateToken, validateToken };
