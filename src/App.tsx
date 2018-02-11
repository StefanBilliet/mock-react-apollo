import * as React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { UserList, UserListProps } from './UserList';

const usersWithTasks = gql`
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
`;

export const App = ({ data: { loading, users, error } }: any) => {
  return (
    <Segment>
      {loading && (
        <Dimmer active={true}>
          <Loader />
        </Dimmer>
      )}
      {!loading && <UserList users={users} />}
    </Segment>
  );
};

export const AppWithData = graphql(usersWithTasks)(App);