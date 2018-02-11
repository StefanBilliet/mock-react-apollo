import * as React from 'react';
import { Segment, List, Icon, Popup } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Segment>
        <List divided={true}>
          <List.Item>
            <List.Icon name="user" />
            <List.Content>
              <List.Header>
                Joske Vermeulen 
                <Popup trigger={<Icon name="star" color="yellow" />} content="Top!" />
              </List.Header>
              <List.Description>
                Age: 36 years<br />
                Rating: 4,33/5
              </List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name="tasks" />
                  <List.Content>
                    <List.Header>Tasks</List.Header>
                    <List.List>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 1 title</List.Header>
                          <List.Description>Task 1 description</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 2 title</List.Header>
                          <List.Description>Task 2 description</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 3 title</List.Header>
                          <List.Description>Task 3 description</List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>    
          <List.Item>
            <List.Icon name="user" />
            <List.Content>
              <List.Header>
                Joske Vermeulen 
                <Popup trigger={<Icon name="star" color="yellow" />} content="Top!" />
              </List.Header>
              <List.Description>
                Age: 36 years<br />
                Rating: 4,33/5
              </List.Description>
              <List.List>
                <List.Item>
                  <List.Icon name="tasks" />
                  <List.Content>
                    <List.Header>Tasks</List.Header>
                    <List.List>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 1 title</List.Header>
                          <List.Description>Task 1 description</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 2 title</List.Header>
                          <List.Description>Task 2 description</List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>                        
                        <List.Content>
                          <List.Header>Task 3 title</List.Header>
                          <List.Description>Task 3 description</List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Content>
          </List.Item>          
        </List>
      </Segment>
    );
  }
}

export default App;
