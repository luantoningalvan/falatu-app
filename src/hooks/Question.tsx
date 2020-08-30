import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

export interface NewQuestionRequest {
  type: string;
  title: string;
  options?: Object;
  files?: Object[];
}

interface QuestionContextData {
  questions: QuestionResponse[];
  answers: AnswerResponse[];
  loading: boolean;
  newQuestion(question: NewQuestionRequest): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
  getMineQuestions(): Promise<void>;
  getLastAnswers(): Promise<void>;
}

interface AnswerResponse {
  _id: string;
  title: string;
  answer: string;
}

export interface QuestionResponse {
  _id: string;
  title: string;
  type: string;
  expired: string;
  answers: {
    _id: string;
    answer: string;
    index: number;
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

  const newQuestion = useCallback(async (question: NewQuestionRequest) => {
    try {
      setLoading(true);

      let formData = new FormData();

      if (question.files) {
        const files = question.files;
        delete question.files;

        Object.keys(question).forEach(key =>
          formData.append(key, (question as any)[key])
        );

        for (var x = 0; x < files.length; x++) {
          formData.append('files', files[x] as any);
        }
      } else {
        Object.keys(question).forEach(key =>
          formData.append(key, (question as any)[key])
        );
      }

      console.log(formData);

      const response = await api.post('/questions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      setQuestions(old => old.filter(question => question._id !== id));
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
