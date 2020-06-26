import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

export interface NewQuestionRequest {
  title: string;
  options?: Object;
  type: string;
}

interface QuestionContextData {
  questions: QuestionResponse[];
  answers: AnswerResponse[];
  loading: boolean;
  newQuestion(credentials: NewQuestionRequest): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
  getMineQuestions(): Promise<void>;
  getLastAnswers(): Promise<void>;
}

interface AnswerResponse {
  id: string;
  title: string;
  answer: string;
}

export interface QuestionResponse {
  id: string;
  title: string;
  type: string;
  expired: string;
  answers: {
    _id: string;
    answer: string;
  }[];
}

const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData
);

export const QuestionProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);
  const [answers, setAnswers] = useState<AnswerResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const getMineQuestions = useCallback(async function getOwnQuestions() {
    try {
      setLoading(true);
      const response = await api.get('/questions/mine');
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const getLastAnswers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/questions/recent');
      setAnswers(response.data);
      setLoading(false);
    } catch (error) {
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
      setQuestions(old => [response.data, ...old]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteQuestion = useCallback(async id => {
    try {
      setLoading(true);
      await api.delete(`/questions/${id}`);
      setQuestions(old => old.filter(question => question.id !== id));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <QuestionContext.Provider
      value={{
        questions,
        answers,
        loading,
        newQuestion,
        getMineQuestions,
        getLastAnswers,
        deleteQuestion,
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
