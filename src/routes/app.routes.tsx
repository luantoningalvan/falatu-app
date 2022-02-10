import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Play from '../screens/Play';
import Questions from '../screens/Questions';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import BottomNavigator from '../components/BottomNavigator';
import Icon from 'react-native-vector-icons/Feather';
const App = createBottomTabNavigator();
import {Avatar} from '../components/Avatar';

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator tabBar={BottomNavigator}>
      <App.Screen
        name="Play"
        component={Play}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="play-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="globe" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Questions"
        component={Questions}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="help-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Avatar name="Luan Tonin Galvan" size="sm" />,
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
