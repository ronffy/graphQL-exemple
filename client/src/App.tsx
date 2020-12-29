/**
 * @description 
 * @author ronffy
 * @Date 2019-09-25 11:29:45
 * @LastEditTime 2020-12-29 19:57:17
 * @LastEditors ronffy
 */
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import Main from './components/Main';
import Launches from './Launches';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, defaults } from './resolvers';



const cache = new InMemoryCache();

const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
  }

  type Query {
    visibilityFilter: String
    todos: [Todo]
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  clientState: {
    cache,
    typeDefs,
    resolvers,
    defaults,
  },
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          {/* <Main /> */}
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;