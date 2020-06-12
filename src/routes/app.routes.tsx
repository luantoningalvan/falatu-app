import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Play from '../screens/Play';
import Questions from '../screens/Questions';
import Settings from '../screens/Settings';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name="Play" component={Play} />
      <App.Screen name="Questions" component={Questions} />
      <App.Screen name="Settings" component={Settings} />
    </App.Navigator>
  );
};

export default AppRoutes;
