import React from 'react';
import { AuthProvider } from './Auth';
import { QuestionProvider } from './Question';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <QuestionProvider>{children}</QuestionProvider>
  </AuthProvider>
);

export default AppProvider;
