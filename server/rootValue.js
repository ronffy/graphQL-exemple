
const axios = require('axios');

const rootValue = {
  async launch({ flight_number }) {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);
    return res.data;
  },

  async launches() {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
    return res.data;
  },

  flight_number() {
    return 'xxx'
  }
}

module.exports = rootValue;
