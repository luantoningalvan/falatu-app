import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/apiClient';

interface PlayContextData {
  questions: QuestionResponse[];
  loading: boolean;
  getRandomQuestions(): Promise<void>;
  skipQuestion(): Promise<void>;
}

export interface QuestionResponse {
  id: string;
  title: string;
  options: [];
  type: string;
}

const PlayContext = createContext<PlayContextData>({} as PlayContextData);

export const PlayProvider: React.FC = ({ children }) => {
  const [queue, setQueue] = useState<QuestionResponse[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(`Tamanho da fila: ${queue.length}`);

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

  return (
    <PlayContext.Provider
      value={{
        questions: queue,
        loading,
        getRandomQuestions,
        skipQuestion,
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
