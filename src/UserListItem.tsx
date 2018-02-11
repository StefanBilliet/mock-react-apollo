import * as React from 'React';
import { List } from 'semantic-ui-react';
import { UserListItemHeader } from './UserListItemHeader';
import { UserListItemDescription } from './UserListItemDescription';
import { UserTask, UserTaskList } from './UserTaskList';

export interface UserListItemProps {
  givenName: string;
  familyName: string;
  age: number;
  quotation: number;
  tasks: UserTask[];
}

export const UserListItem = ({givenName, familyName, age, quotation, tasks}: UserListItemProps) => {
  return (
    <List.Item>
      <List.Icon name="user" />
      <List.Content>
        <UserListItemHeader givenName={givenName} familyName={familyName} age={age} quotation={quotation} />
        <UserListItemDescription age={age} quotation={quotation} />
        <UserTaskList tasks={tasks} />
      </List.Content>
    </List.Item>
  );
};