import * as React from 'react';
import { List } from 'semantic-ui-react';
import { UserListItem, UserListItemProps } from './UserListItem';

export interface UserListProps {
  users: UserListItemProps[];
}

export const UserList = (props: UserListProps) => {
  return (
    <List divided={true}>
    {props.users.map((user, index) => <UserListItem key={`user-${index}`} {...user} />)}    
    </List>
  );
};