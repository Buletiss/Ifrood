const connection = require('../database/connection');

module.exports = {
  async store(request, response) {
    const { order_name, price, amount, address } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('orders').insert({
      order_name,
      price,
      amount,
      address,
      user_id,
    });
    return response.json({ id });
  },

  //   async index(request, response) {
  //     try {
  //       const orders = await connection('orders')
  //         .join('users', 'user_id', '=', 'orders.user_id')
  //         .select(['orders.*, users.name, users.password, users.email']);
  //       return response.json(orders);
  //     } catch (error) {
  //       return response.status(404).json(error);
  //     }
  //   },

  async index(request, response) {
    const { id } = request.params;
    const order = await connection('orders').where('id', id);
    return response.json(order);
  },
};
