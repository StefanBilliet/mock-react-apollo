import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { AppWithData as App } from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';

import gql from 'graphql-tag';

import { schema } from './mockSchema';

import { ApolloProvider } from 'react-apollo';

const apolloCache = new InMemoryCache((window as any).__APOLLO_STATE__);

const client = new ApolloClient({
  cache: apolloCache,
  link: new SchemaLink({ schema })
});

client.query({
  query: gql`
  query usersWithTasks {
    users {
      familyName
      givenName
      age
      quotation,
      tasks {
        title
        description
      }
    }
  }
  `,
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
),
  document.getElementById('root'));
registerServiceWorker();