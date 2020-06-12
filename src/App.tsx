import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#D90368" />
      <View style={{flex: 1, backgroundColor: '#D90368'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
