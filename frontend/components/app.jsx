import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './navbar/navbar_container';



const App = ({ children }) => (
  
  <div>
    <header>
      <NavBarContainer />
    </header>
    {children}
  </div>
);

export default App;
