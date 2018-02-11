import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { AppWithData as App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { schema } from './mockSchema';
import { ApolloProvider } from 'react-apollo';
import './index.css';

const apolloCache = new InMemoryCache((window as any).__APOLLO_STATE__);

const client = new ApolloClient({
  cache: apolloCache,
  link: new SchemaLink({ schema })
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
),
document.getElementById('root'));
registerServiceWorker();