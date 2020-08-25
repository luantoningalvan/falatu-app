import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Play from '../screens/Play';
import Questions from '../screens/Questions';
import CreateQuestion from '../screens/Questions/CreateQuestion';
import SeeQuestion from '../screens/Questions/SeeQuestion';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import BottomNavigator from '../components/BottomNavigator';
import Icon from 'react-native-vector-icons/Feather';
const App = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const QuestionsStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      component={Profile}
      name="Profile"
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen
      component={Settings}
      name="Settings"
      options={{
        title: 'Configurações',
        headerTitleStyle: {
          fontFamily: 'Comfortaa-Regular',
          color: 'white',
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: '#581145',
        },
        headerTintColor: 'white',
      }}
    />
  </ProfileStack.Navigator>
);

const QuestionsStackScreen = () => (
  <QuestionsStack.Navigator>
    <QuestionsStack.Screen
      component={Questions}
      name="Questions"
      options={{ headerShown: false }}
    />
    <QuestionsStack.Screen
      component={CreateQuestion}
      options={{ headerShown: false }}
      name="CreateQuestion"
    />
    <QuestionsStack.Screen
      component={SeeQuestion}
      options={{ headerShown: false }}
      name="SeeQuestion"
    />
  </QuestionsStack.Navigator>
);

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      tabBar={BottomNavigator}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#571145',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#fff',
      }}>
      <App.Screen
        name="Profile"
        component={ProfileStackScreen}
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
        component={QuestionsStackScreen}
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
