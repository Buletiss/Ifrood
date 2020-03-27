const connection = require('../database/connection');

module.exports = {
  async post(req, res) {
    const { name } = req.body;
    const { password } = req.body;

    const login = await connection('users')
      .where('name', name)
      .select('name')
      .first();

    const senha = await connection('users')
      .where('password', password)
      .select('password')
      .first();

    return res.json({ login, senha });
  },
};
