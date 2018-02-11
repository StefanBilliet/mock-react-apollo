import * as React from 'React';
import { List } from 'semantic-ui-react';
import { UserListItem, UserListItemProps } from './UserListItem';

interface UserListProps {
  users: UserListItemProps[];
}

export const UserList = (props: UserListProps) => {
  return (
    <List divided={true}>
    {props.users.map(user => <UserListItem key={`user-${user.givenName}`} {...user} />)}    
    </List>
  );
};