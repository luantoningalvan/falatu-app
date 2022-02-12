import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/apiClient';

interface AnswerData {
  id: string;
  answer?: string;
  type: string;
  optionIndex?: number;
}

interface ReportData {
  question: string;
  reportReason: string;
}

type Media = {
  url: string;
};

export type Option = {
  text: string;
  number: number;
  thumb?: string;
};

export type Question = {
  id: string;
  mode: 'text' | 'binary' | 'comparison' | 'multi' | 'video';
  title: string;
  media: Media[];
  options?: Option[];
};
interface PlayContextData {
  questions: Question[];
  loading: boolean;
  getRandomQuestions(): Promise<void>;
  skipQuestion(): Promise<void>;
  answerQuestion(data: AnswerData): Promise<void>;
  reportQuestion(data: ReportData): Promise<void>;
}

const PlayContext = createContext<PlayContextData>({} as PlayContextData);

export const PlayProvider: React.FC = ({children}) => {
  const [queue, setQueue] = useState<Question[]>([
    {
      id: 'id-1',
      mode: 'text',
      title: 'Que profissão pareço ter?',
      media: [
        {
          url: 'https://astrostyle.com/wp-content/uploads/2020/06/Capricorn-Woman-allef-vinicius-unsplash-scaled.jpg',
        },
      ],
    },
    {
      id: 'id-2',
      mode: 'binary',
      title: 'Meu nariz é grande demais?',
      media: [
        {
          url: 'https://bignoise.com/wp-content/uploads/2020/02/Stolar_artist_photo.png',
        },
      ],
    },
    {
      id: 'id-3',
      mode: 'comparison',
      title: 'Qual praia mais linda?',
      media: [
        {
          url: 'https://a.cdn-hotels.com/gdcs/production108/d1153/9bb4f4ff-afd9-4267-9e81-8fc370241afc.jpg',
        },
        {
          url: 'https://s3q7j5f5.stackpathcdn.com/wp-content/uploads/2021/04/praia-belissima-de-maceio.jpg',
        },
      ],
    },
    {
      id: 'id-4',
      mode: 'multi',
      title: 'Eu tenho cara de que?',
      options: [
        {text: 'Veterinária', number: 1},
        {text: 'Modelo', number: 2},
        {text: 'Revendedora Avon', number: 3},
      ],
      media: [
        {
          url: 'https://astrostyle.com/wp-content/uploads/2020/06/Capricorn-Woman-allef-vinicius-unsplash-scaled.jpg',
        },
      ],
    },
    {
      id: 'id-5',
      mode: 'video',
      title: 'Qual o lance mais bonito',
      options: [
        {
          text: '',
          thumb:
            'https://storage.googleapis.com/somnotalo/Screenshot%20from%202022-02-11%2023-31-33.png',
          number: 1,
        },
        {
          text: '',
          thumb:
            'https://storage.googleapis.com/somnotalo/Screenshot%20from%202022-02-11%2023-32-22.png',
          number: 2,
        },
        {
          text: '',
          thumb:
            'https://storage.googleapis.com/somnotalo/Screenshot%20from%202022-02-11%2023-32-57.png',
          number: 3,
        },
        {
          text: '',
          thumb:
            'https://storage.googleapis.com/somnotalo/Screenshot%20from%202022-02-11%2023-32-57.png',
          number: 4,
        },
      ],
      media: [
        {
          url: 'https://storage.googleapis.com/somnotalo/y2meta.com%20-%20One%20of%20the%20best%20goals%20in%20football%20%F0%9F%94%A5%F0%9F%90%90%20.mp4',
        },
        {
          url: 'https://storage.googleapis.com/somnotalo/y2meta.com%20-%20When%20assist%20is%20more%20beautiful%20than%20goal%20.mp4',
        },
        {
          url: 'https://storage.googleapis.com/somnotalo/y2meta.com-Best%20team%20goal%20%20_%20%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%20%23Shorts-(480p).mp4',
        },
      ],
    },
  ]);
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
    async ({id, answer, type, optionIndex}) => {
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
    [skipQuestion],
  );

  const reportQuestion = useCallback(
    async ({question, reportReason}) => {
      await api.post('/reports', {
        question,
        reportReason,
      });

      await skipQuestion();
    },
    [skipQuestion],
  );

  return (
    <PlayContext.Provider
      value={{
        questions: queue,
        loading,
        getRandomQuestions,
        skipQuestion,
        answerQuestion,
        reportQuestion,
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
