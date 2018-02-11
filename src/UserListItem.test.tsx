import * as React from 'React';
import { shallow } from 'enzyme';

import { 
  UserListItem, 
  UserListItemHeader, 
  UserListItemDescription, 
  UserTaskList,
  UserListItemProps
} from './UserListItem';

describe('<UserListItem />', () => {
  it('should render a UserListItemHeader', () => {
    const props: UserListItemProps = {
      givenName: 'Joske',
      familyName: 'Vermeulen',
      age: 15.5,
      quotation: 4.3,
      tasks: []
    };

    const wrapper = shallow((
      <UserListItem {...props} />
    ));

    expect(wrapper.find(UserListItemHeader)).toHaveLength(1);
  });

  it('should render a UserListItemDescription', () => {
    const props = {
      givenName: 'Joske',
      familyName: 'Vermeulen',
      age: 15.5,
      quotation: 4.3,
      tasks: []
    };

    const wrapper = shallow((
      <UserListItem {...props} />
    ));

    expect(wrapper.find(UserListItemDescription)).toHaveLength(1);
  });

  it('should render a UserTaskList', () => {
    const props = {
      givenName: 'Joske',
      familyName: 'Vermeulen',
      age: 15.5,
      quotation: 4.3,
      tasks: []
    };

    const wrapper = shallow((
      <UserListItem {...props} />
    ));
    
    expect(wrapper.find(UserTaskList)).toHaveLength(1);
  });
});