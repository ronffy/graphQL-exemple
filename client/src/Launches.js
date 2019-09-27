import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query Query_LAUNCHES {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
    launch(flight_number: 3) {
      flight_number
      mission_name
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

console.log('LAUNCHES_QUERY', LAUNCHES_QUERY);

const Launches = (props) => {

  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>

      <Query query={LAUNCHES_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>
            if (error) console.log(error);
            return (
              <>
                <LaunchItem key={data.launch.flight_number} launch={data.launch} />
                <hr />
                <Fragment>
                  {
                    data.launches.map((launch) =>
                      <LaunchItem key={launch.flight_number} launch={launch} />
                    )
                  }
                </Fragment>
              </>
            )
          }
        }
      </Query>
    </Fragment>
  )
}

export default Launches
