import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Play from '../screens/Play';
import Questions from '../screens/Questions';
import CreateQuestion from '../screens/Questions/CreateQuestion';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
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
    <ProfileStack.Screen component={Settings} name="Settings" />
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
      options={{
        title: 'Criar Pergunta',
        headerShown: false,
      }}
      name="CreateQuestion"
    />
  </QuestionsStack.Navigator>
);

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
