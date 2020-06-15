import React from 'react';
import { AuthProvider } from './Auth';
import { QuestionProvider } from './Question';
import { PlayProvider } from './Play';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <QuestionProvider>
      <PlayProvider>{children}</PlayProvider>
    </QuestionProvider>
  </AuthProvider>
);

export default AppProvider;
