import * as React from 'React';
import { List } from 'semantic-ui-react';
import { UserListItemHeader } from './UserListItemHeader';

export interface UserListItemProps {
  givenName: string;
  familyName: string;
  age: number;
  quotation: number;
  tasks: UserTask[];
}

export interface UserTask {
  title: string;
  description: string;
}

export const UserListItem = ({givenName, familyName, age, quotation, tasks}: UserListItemProps) => {
  return (
    <List.Item>
      <List.Icon name="user" />
      <List.Content>
        <UserListItemHeader givenName={givenName} familyName={familyName} age={age} quotation={quotation} />
        <UserListItemDescription givenName={givenName} familyName={familyName} age={age} quotation={quotation} />
        <UserTaskList tasks={tasks} />
      </List.Content>
    </List.Item>
  );
};

export interface UserListItemDescriptionProps {
  givenName: string;
  familyName: string;
  age: number;
  quotation: number;
}

export const UserListItemDescription = (props: UserListItemDescriptionProps) => {
  return (
    <List.Description>
      Age: 36 years<br />
      Rating: 4,33/5
    </List.Description>
  );
};

export interface UserTaskListProps {
  tasks: UserTask[];
}

export const UserTaskList = (props: UserTaskListProps) => {
  return (
    <List.List>
      <List.Item>
        <List.Icon name="tasks" />
        <List.Content>
          <List.Header>Tasks</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>Task 1 title</List.Header>
                <List.Description>Task 1 description</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Task 2 title</List.Header>
                <List.Description>Task 2 description</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Task 3 title</List.Header>
                <List.Description>Task 3 description</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List.List>
  );
};
