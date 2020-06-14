import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

export interface NewQuestionRequest {
  title: string;
  options?: Object;
  type: string;
}

interface QuestionContextData {
  questions: object;
  loading: boolean;
  newQuestion(credentials: NewQuestionRequest): Promise<void>;
}

interface QuestionState {
  questions: object;
}

const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData
);

export const QuestionProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<QuestionState>({} as QuestionState);
  const [loading, setLoading] = useState(true);

  const newQuestion = useCallback(async ({ title, options, type }) => {
    try {
      setLoading(true);
      const response = await api.post('/questions', {
        title,
        options,
        type,
      });
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <QuestionContext.Provider
      value={{ questions: data.questions, loading, newQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export function useQuestion(): QuestionContextData {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error('useQuestion most be used within an QuestionProvider');
  }

  return context;
}
