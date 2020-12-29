/**
 * @description 
 * @author ronffy
 * @Date 2019-09-27 16:57:36
 * @LastEditTime 2020-12-29 18:01:56
 * @LastEditors ronffy
 */

const axios = require('axios');

const data = [
  {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "launch_date_local": "2006-03-25T10:30:00+12:00",
    "launch_success": false
  },
  {
    "flight_number": 2,
    "mission_name": "DemoSat",
    "launch_date_local": "2007-03-21T13:10:00+12:00",
    "launch_success": false
  },
  {
    "flight_number": 3,
    "mission_name": "Trailblazer",
    "launch_date_local": "2008-08-03T15:34:00+12:00",
    "launch_success": false
  },
]

const rootValue = {
  async launch({ flight_number }) {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);
    return res.data;
  },

  async launches() {
    // const res = await axios.get(`https://api.spacexdata.com/v3/launches`);
    return data
  },

  async launchDelete({ flight_number }) {
    data = data.filter((item) => item.flight_number !== flight_number);
    return data;
  },

  flight_number({ n }) {
    return 'xxx' + n
  }
}

module.exports = rootValue;
