import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StyleProvider from './components/Provider';
import Routes from './routes';
import HooksProvider from './hooks';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0a82c6" />
      <HooksProvider>
        <StyleProvider>
          <Routes />
        </StyleProvider>
      </HooksProvider>
    </NavigationContainer>
  );
};

export default App;
