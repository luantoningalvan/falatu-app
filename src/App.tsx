import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StyleProvider from './components/Provider';
import Routes from './routes';
import HooksProvider from './hooks';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#D90368" />
      <HooksProvider>
        <StyleProvider>
          <MenuProvider>
            <Routes />
          </MenuProvider>
        </StyleProvider>
      </HooksProvider>
    </NavigationContainer>
  );
};

export default App;
