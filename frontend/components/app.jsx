import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar';

const App = ({ children }) => (
  <div>
    <header>
      <NavBar />
    </header>
    {children}
  </div>
);

export default App;
