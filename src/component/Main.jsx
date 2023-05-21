import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const Main = () => {
  const [logIn, setLogIn] = useState(false);

  const handleLogin = () => {
    setLogIn(true);
  };

  const handleLogout = () => {
    setLogIn(false);
  };

  return (
    <div>
      {!logIn ? (
        <Login clickLogin={handleLogin} />
      ) : (
        <Home clickLogout={handleLogout} />
      )}
    </div>
  );
};

export default Main;
