const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async store(request, response) {
    try {
      const id = crypto.randomBytes(4).toString('HEX');
      const { name, password, email } = request.body;

      await connection('users').insert({
        id,
        name,
        password,
        email,
      });

      return response.json({ id, name, password, email });
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  async index(request, response) {
    try {
      const users = await connection('users').select('*');
      return response.json(users);
    } catch (error) {
      return response.status(400).json(error);
    }
  },

  // async show(request, response) {},

  // async remove(request, response) {
  //   return response.json({ ok: true });
  // },

  // async update(request, response) {
  //   return response.json({ ok: true });
  // },
};
