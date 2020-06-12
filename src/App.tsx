import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StyleProvider from './components/Provider';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#543A6A" />
      <StyleProvider>
        <Routes />
      </StyleProvider>
    </NavigationContainer>
  );
};

export default App;
