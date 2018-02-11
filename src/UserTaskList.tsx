import * as React from 'React';
import { List } from 'semantic-ui-react';

export interface UserTaskListProps {
  tasks: UserTask[];
}

export interface UserTask {
  title: string;
  description: string;
}

export const UserTaskList = ({ tasks }: UserTaskListProps) => {
  return tasks.length === 0 ? <span>This user has no tasks</span> : (
    <List.List>
      <List.Item>
        <List.Icon name="tasks" />
        <List.Content>
          <List.Header>Tasks</List.Header>
          <List.List>
            {tasks.map(({ title, description }, index) => (
              <List.Item key={`task-${index}`}>
                <List.Content>
                  <List.Header>{title}</List.Header>
                  <List.Description>{description}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List.List>
        </List.Content>
      </List.Item>
    </List.List>
  );
};