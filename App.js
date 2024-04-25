import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);


  const handleUserLogin = () => {
    setUserLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {userLoggedIn ? <Routes /> : <AuthStack onUserLogin={handleUserLogin} />}
    </NavigationContainer>
  );
};

export default App;

