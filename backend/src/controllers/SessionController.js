const connection = require('../database/connection');

module.exports = {
  async post(req, res) {
    const { email, password } = req.body;

    const user = await connection('users')
      .where('email', email)
      .andWhere('password', password)
      .select('email', 'password')
      .first();

    if (!user)
      return res.status(400).json({ error: 'Usuário ou senha incorreta' });

    return res.json(user);
  },
};
