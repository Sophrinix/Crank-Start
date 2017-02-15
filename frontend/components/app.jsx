import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <header>
      <NavBar />
    </header>
    {children}
  </div>
);

export default App;
