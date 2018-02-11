import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    data: {
      loading: true
    }
  };
  ReactDOM.render(<App {...props} />, div);
});
