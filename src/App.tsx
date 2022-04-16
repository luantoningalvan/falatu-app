import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StyleProvider from "./components/Provider";
import Routes from "./routes";
import HooksProvider from "./hooks";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7100FF" />
      <HooksProvider>
        <StyleProvider>
          <Routes />
        </StyleProvider>
      </HooksProvider>
    </NavigationContainer>
  );
};

export default App;
