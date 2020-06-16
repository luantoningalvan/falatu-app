import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

export interface NewQuestionRequest {
  title: string;
  options?: Object;
  type: string;
}

interface QuestionContextData {
  questions: QuestionResponse[];
  loading: boolean;
  newQuestion(credentials: NewQuestionRequest): Promise<void>;
  getMineQuestions(): Promise<void>;
}

interface QuestionResponse {
  id: string;
  title: string;
  answers: [];
}

const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData
);

export const QuestionProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<QuestionResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const getMineQuestions = useCallback(async function getOwnQuestions() {
    try {
      setLoading(true);
      const response = await api.get('/questions/mine');
      setData(response.data);
      //console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const newQuestion = useCallback(async ({ title, options, type }) => {
    try {
      setLoading(true);
      const response = await api.post('/questions', {
        title,
        options,
        type,
      });
      setLoading(false);
      setData(old => [response.data, ...old]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        questions: data,
        loading,
        newQuestion,
        getMineQuestions,
      }}>
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
