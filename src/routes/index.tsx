import React from 'react';
import { ActivityIndicator } from 'react-native';
import AuthRotes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { user, loading } = { user: false, loading: false };

  if (loading) {
    return <ActivityIndicator size="large" color="#999" />;
  }
  return user ? <AppRoutes /> : <AuthRotes />;
};

export default Routes;
