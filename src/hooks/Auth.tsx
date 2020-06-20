import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/apiClient';
import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../utils/setAuthToken';
interface SingInCredentials {
  email: string;
  password: string;
}

export interface UserResponse {
  username: string;
  email: string;
  name?: string;
  answerCount: number;
  questionCount?: number;
  avatarList: {
    url: string;
    key: string;
    index: number;
  }[];
}

interface AuthContextData {
  user: UserResponse;
  loading: boolean;
  signIn(credentials: SingInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: UserResponse;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@FALATU:token',
        '@FALATU:user',
      ]);

      if (token[1] && user[1]) {
        setAuthToken(token[1] as string);
        const userData = await api.get<UserResponse>('/users/me');

        setData({
          token: token[1],
          user: userData.data,
        });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;

    setAuthToken(token);
    const user = await api.get('/users/me');

    await AsyncStorage.multiSet([
      ['@FALATU:token', token],
      ['@FALATU:user', JSON.stringify(user.data)],
    ]);

    setData({ user: user.data, token });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@FALATU:token', '@FALATU:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth most be used within an AuthProvider');
  }

  return context;
}
