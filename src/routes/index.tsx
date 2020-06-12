import React from 'react';
import {ActivityIndicator} from 'react-native';
import AuthRotes from './auth.routes';
import AppRotes from './app.routes';

const Routes: React.FC = () => {
  const {user, loading} = {user: true, loading: false};

  if (loading) {
    return <ActivityIndicator size="large" color="#999" />;
  }
  return user ? <AppRotes /> : <AuthRotes />;
};

export default Routes;
