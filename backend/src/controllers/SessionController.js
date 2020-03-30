const connection = require('../database/connection');

module.exports = {
  async post(req, res) {
    const { email, password } = req.body;

    const login = await connection('users')
      .where('email', email)
      .select('email')
      .first();

    const senha = await connection('users')
      .where('password', password)
      .select('password')
      .first();

    if (!login || !senha) {
      return res.status(400).send({ mensseger: 'Senha ou login incorreta!!' });
    }

    return res.json({ login, senha });
  },
};
