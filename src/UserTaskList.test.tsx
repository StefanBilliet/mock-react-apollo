import * as React from 'react';
import { shallow } from 'enzyme';
import { UserTaskListProps, UserTaskList } from './UserTaskList';
import { List } from 'semantic-ui-react';

describe('<UserTaskList />', () => {
  describe('Given no tasks', () => {
    it('should render a simple message', () => {
      const props: UserTaskListProps = {
        tasks: []
      };

      const wrapper = shallow((
        <UserTaskList {...props} />
      ));

      expect(wrapper.contains(<span>This user has no tasks</span>)).toBe(true);
    });
  });

  describe('Given some tasks', () => {
    it('should render all the tasks for the user in a list', () => {
      const props: UserTaskListProps = {
        tasks: [{
          title: 'Something to do',
          description: `It's going to be great 👌`
        }, {
          title: 'Something else to do',
          description: `Really great 👌`
        }]
      };

      const wrapper = shallow((
        <UserTaskList {...props} />
      ));

      expect(wrapper.contains([(
        <List.Item>
          <List.Content>
            <List.Header>Something to do</List.Header>
            <List.Description>It's going to be great 👌</List.Description>
          </List.Content>
        </List.Item>
      ), (
        <List.Item>
          <List.Content>
            <List.Header>Something else to do</List.Header>
            <List.Description>Really great 👌</List.Description>
          </List.Content>
        </List.Item>
      )])).toBe(true);
    });
  });
});