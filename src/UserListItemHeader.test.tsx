import * as React from 'react';
import { shallow } from 'enzyme';
import { UserListItemHeaderProps, UserListItemHeader } from './UserListItemHeader';
import { Icon, Label } from 'semantic-ui-react';

describe('<UserListItemHeader />', () => {
  it('should render the full name of the user', () => {
    const props: UserListItemHeaderProps = {
      givenName: 'Marcel',
      familyName: 'Verlinden',
      age: 15.5,
      quotation: 4.3
    };

    const wrapper = shallow((
      <UserListItemHeader {...props} />
    ));

    expect(wrapper.contains('Marcel Verlinden')).toBe(true);
  });

  describe('Given a user with an age less than thirty', () => {
    describe('Given a quotation less than 4', () => {
      it('should not render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 29.9,
          quotation: 3.9
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(false);
      });
    });

    describe('Given a quotation equal to 4', () => {
      it('should render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 29.9,
          quotation: 4
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(true);
      });
    });

    describe('Given a quotation greater than 4', () => {
      it('should render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 29.9,
          quotation: 4
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(true);
      });
    });
  });

  describe('Given a user with an age of thirty or more', () => {
    describe('Given a quotation less than 4.33', () => {
      it('should not render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 30,
          quotation: 3.9
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(false);
      });
    });

    describe('Given a quotation equal to 4.33', () => {
      it('should render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 30,
          quotation: 4.33
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(true);
      });
    });

    describe('Given a quotation greater than 4.33', () => {
      it('should render a special icon with a commendation', () => {
        const props: UserListItemHeaderProps = {
          givenName: 'Joske',
          familyName: 'Vermeulen',
          age: 40,
          quotation: 5
        };
    
        const wrapper = shallow((
          <UserListItemHeader {...props} />
        ));
    
        expect(wrapper.contains(<Label className="commendation"><Icon name="star" color="yellow" /> (Top!)</Label>)).toBe(true);
      });
    });
  });
});