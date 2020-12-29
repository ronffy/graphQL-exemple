/**
 * @description 
 * @author ronffy
 * @Date 2019-09-25 11:37:45
 * @LastEditTime 2020-12-29 18:02:38
 * @LastEditors ronffy
 */

const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type RocketType {
    rocket_id: ID
    rocket_name: String
    rocket_type: String
  }

  type LaunchType {
    flight_number: Int
    mission_name: String
    launch_date_local: String
    launch_success: Boolean
    rocket: RocketType
  }

  type Query {
    launch(flight_number: Int!): LaunchType
    launches: [LaunchType]!
    flight_number(n: Int): String
  }

  type Mutation {
    launchDelete(flight_number: Int!): LaunchType
  }
`);

module.exports = schema;
