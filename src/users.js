const axios = require('../node_modules/axios');
class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}
module.exports = Users;