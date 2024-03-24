import User from '../models/index.js';
import tokens from '../config/tokens.js';

const register = (req, res) => {
  const user = req.body;
  User.create(user)
    .then(() => {
      console.log(user);
      res.sendStatus(201);
    })
    .catch((error) => console.log(error));
};
export { register };
