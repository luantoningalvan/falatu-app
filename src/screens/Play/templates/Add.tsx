import React from 'react';
import {
  InterstitialAd,
  BannerAd,
  BannerAdSize,
  TestIds,
} from '@react-native-firebase/admob';
import { View } from 'react-native';

InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

const Add: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <BannerAd size={BannerAdSize.MEDIUM_RECTANGLE} unitId={TestIds.BANNER} />
    </View>
  );
};

export default Add;
