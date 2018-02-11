import * as React from 'React';
import { List } from 'semantic-ui-react';

export interface UserListItemDescriptionProps {
  age: number;
  quotation: number;
}

export const UserListItemDescription = (props: UserListItemDescriptionProps) => {
  return (
    <List.Description>
      {`Age: ${props.age} years`}<br />
      {`Rating: ${props.quotation}/5`}
    </List.Description>
  );
};