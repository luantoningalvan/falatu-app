import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default () => (
  <View
    style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);
