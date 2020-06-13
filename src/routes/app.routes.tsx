import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Play from '../screens/Play';
import Questions from '../screens/Questions';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Feather';
const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#571145',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#fff',
        style: {
          borderTopWidth: 0,
          height: 60,
          shadowColor: '#000',
          elevation: 0,
          backgroundColor: '#571145',
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: { width: 0, height: 0 },
        },
      }}>
      <App.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Play"
        component={Play}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="play-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Questions"
        component={Questions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="help-circle" color={color} size={size} />
          ),
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
