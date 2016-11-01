import React from 'react';
// import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className = "splash-screen">
    <h1>Welcome to Diffindo</h1>
    {children}
  </div>
);

export default App;
