import * as React from 'React';
import { shallow } from 'enzyme';

import { 
  UserListItem,
  UserListItemProps
} from './UserListItem';
import { UserListItemHeader } from './UserListItemHeader';
import { UserListItemDescription } from './UserListItemDescription';
import { UserTaskList } from './UserTaskList';

describe('<UserListItem />', () => {
  it('should render a <UserListItemHeader />', () => {
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

    expect(wrapper.contains(<UserListItemHeader givenName="Joske" familyName="Vermeulen" age={15.5} quotation={4.3} />)).toBe(true);
  });

  it('should render a <UserListItemDescription />', () => {
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

    expect(wrapper.contains(<UserListItemDescription age={15.5} quotation={4.3} />)).toBe(true);
  });

  it('should render a <UserTaskList />', () => {
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
    
    expect(wrapper.contains(<UserTaskList tasks={[]} />)).toBe(true);
  });
});