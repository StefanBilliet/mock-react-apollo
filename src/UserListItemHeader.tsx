import * as React from 'react';
import { List, Icon, Label } from 'semantic-ui-react';

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
      {(age < 30 && quotation >= 4 || age >= 30 && quotation >= 4.33) && <Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>}
    </List.Header>
  );
};