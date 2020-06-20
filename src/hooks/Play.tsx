import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

interface AnswerData {
  id: string;
  answer?: string;
  type: string;
  optionIndex?: number;
}

interface PlayContextData {
  questions: QuestionResponse[];
  loading: boolean;
  getRandomQuestions(): Promise<void>;
  skipQuestion(): Promise<void>;
  answerQuestion(data: AnswerData): Promise<void>;
}

export enum QuestionTypes {
  YESORNOT = 'yesornot',
  MULTI = 'multi',
  PHOTO_COMPARISON = 'photocomp',
  WRITTEN = 'written',
}

export interface QuestionResponse {
  _id: string;
  randomUserAvatar?: string;
  title: string;
  type: QuestionTypes;
  options: {
    title?: string;
    url?: string;
    answerCount: number;
  }[];
}

const PlayContext = createContext<PlayContextData>({} as PlayContextData);

export const PlayProvider: React.FC = ({ children }) => {
  const [queue, setQueue] = useState<QuestionResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const getRandomQuestions = useCallback(async () => {
    try {
      setLoading(true);

      while (true) {
        const response = await api.get('/questions/random/5');

        if (response.data.length > 0) {
          setQueue(old => [...old, ...response.data]);
          break;
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const skipQuestion = useCallback(async () => {
    if (queue.length > 1) {
      setQueue(old => old.slice(1));
    } else {
      await getRandomQuestions();
      setQueue(old => old.slice(1));
    }
  }, [queue, getRandomQuestions]);

  const answerQuestion = useCallback(
    async ({ id, answer, type, optionIndex }) => {
      try {
        await api.post(`/questions/answer/${id}`, {
          answer,
          optionIndex,
          type,
        });
        await skipQuestion();
      } catch (error) {
        console.log(error);
      }
    },
    [skipQuestion]
  );

  return (
    <PlayContext.Provider
      value={{
        questions: queue,
        loading,
        getRandomQuestions,
        skipQuestion,
        answerQuestion,
      }}>
      {children}
    </PlayContext.Provider>
  );
};

export function usePlay(): PlayContextData {
  const context = useContext(PlayContext);

  if (!context) {
    throw new Error('usePlay most be used within an PlayProvider');
  }

  return context;
}
