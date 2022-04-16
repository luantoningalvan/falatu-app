import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Play from "../screens/Play";
import Questions from "../screens/Questions";
import Ask from "../screens/Ask";
import Profile from "../screens/Profile";
import { Feather as Icon } from "@expo/vector-icons";
const App = createBottomTabNavigator();
import { Avatar } from "../components/Avatar";

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Play"
        component={Play}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="play-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Ask"
        component={Ask}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <App.Screen
        name="Questions"
        component={Questions}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
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
