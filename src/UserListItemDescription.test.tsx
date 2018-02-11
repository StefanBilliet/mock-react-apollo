import * as React from 'React';
import { shallow } from 'enzyme';
import { List } from 'semantic-ui-react';
import { UserListItemDescription, UserListItemDescriptionProps } from './UserListItemDescription';

describe('<UserListItemDescription />', () => {
  it('should render the age and the quotation', () => {
    const props: UserListItemDescriptionProps = {
      age: 15.5,
      quotation: 4.3
    };

    const wrapper = shallow((
      <UserListItemDescription {...props} />
    ));
    
    expect(wrapper.contains((
    <List.Description>
      Age: 15.5 years<br />
      Rating: 4.3/5
    </List.Description>))).toBe(true);
  });
});