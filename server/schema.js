
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
    flight_number: String
  }
`);

module.exports = schema;
