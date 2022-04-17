import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Play from "../screens/Play";
import Questions from "../screens/Questions";
import Ask from "../screens/Ask";
import Profile from "../screens/Profile";
import { Feather as Icon } from "@expo/vector-icons";
const App = createBottomTabNavigator();
import { Avatar } from "../components/Avatar";
import theme from "../components/Provider/theme";
import { Platform } from "react-native";

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.palette.violet,
        tabBarInactiveTintColor: theme.palette.purple,
        tabBarStyle: {
          height: 56,
        },
      }}
    >
      <App.Screen
        name="Play"
        component={Play}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
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
      <App.Screen
        name="Ask"
        component={Ask}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Notifications"
        component={Questions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar
              style={{
                borderColor: focused ? theme.palette.violet : "transparent",
                borderWidth: 2,
              }}
              name="Luan Tonin Galvan"
              size="sm"
            />
          ),
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
