import * as React from 'React';
import { shallow } from 'enzyme';
import { UserList } from './UserList';
import { UserListItem } from './UserListItem';

describe('<UserList />', () => {
  describe('Given no users', () => {
    it('should not render <UserListItem> elements', () => {
      const props: UserListProps = {
        users: []
      };
      const wrapper = shallow((
        <UserList {...props} />
      ));
      expect(wrapper.find(UserListItem)).toHaveLength(0);
    });
  });
  
  describe('Given some users', () => {
    it('should render <UserListItem> elements for each user', () => {
      const props: UserListProps = {
        users: [{
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 15.5,
          quotation: 4.3,
          tasks: []
        }, {
          givenName: 'Bart',
          familyName: 'Simpson',
          age: 10,
          quotation: 3,
          tasks: []
        }]
      };
      const wrapper = shallow((
        <UserList {...props} />
      ));
      expect(wrapper.contains([<UserListItem key="users-joske" {...props.users[0]} />])).toBe(true);
    });
  });
});