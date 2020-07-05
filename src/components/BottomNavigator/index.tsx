import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import posed from 'react-native-pose';

const windowWidth = Dimensions.get('window').width;
const tabWidth = windowWidth / 3;
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
});

const Scaler = posed.View({
  active: { scale: 1.25 },
  inactive: { scale: 1 },
});

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    elevation: 2,
    alignItems: 'center',
    backgroundColor: '#551145',
  },
  tabButton: { flex: 1 },
  spotLight: {
    width: tabWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotLightInner: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  scaler: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const TabBar = ({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
}: BottomTabBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={S.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={S.spotLight} pose={`route${state.index}`}>
          <View style={S.spotLightInner} />
        </SpotLight>
      </View>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const Icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={S.tabButton}>
            <Scaler pose={isFocused ? 'active' : 'inactive'} style={S.scaler}>
              <Icon
                color={isFocused ? activeTintColor : inactiveTintColor}
                size={24}
              />
            </Scaler>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
