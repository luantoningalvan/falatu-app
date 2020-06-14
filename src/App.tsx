import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StyleProvider from './components/Provider';
import Routes from './routes';
import HooksProvider from './hooks';
import { MenuProvider } from 'react-native-popup-menu';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

const App = () => {
  useEffect(() => {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#543A6A" />
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
