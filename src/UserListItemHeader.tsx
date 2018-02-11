import * as React from 'React';
import { List, Popup, Icon } from 'semantic-ui-react';

export interface UserListItemHeaderProps {
  givenName: string;
  familyName: string;
  age: number;
  quotation: number;
}

export const UserListItemHeader = ({givenName, familyName, age, quotation}: UserListItemHeaderProps) => {
  return (
    <List.Header>
      {`${givenName} ${familyName}`}
      {(age < 30 && quotation >= 4 || age >= 30 && quotation >= 4.33) && <div><Icon name="star" color="yellow" /> (Top!)</div>}
    </List.Header>
  );
};