import React from 'react';
import ReactDOM from 'react-dom';
import Metronom from './Metronom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Metronom />, div);
});
