import React from 'react';
import AuthRotes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (!loading) {
    return user ? <AppRoutes /> : <AuthRotes />;
  }

  return <></>;
};

export default Routes;
