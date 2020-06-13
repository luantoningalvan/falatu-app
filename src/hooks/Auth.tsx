import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/apiClient';
import AsyncStorage from '@react-native-community/async-storage';
interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SingInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@WDYT:token',
        '@WDYT:user',
      ]);

      if (token[1] && user[1]) {
        setData({
          token: token[1],
          user: JSON.parse(user[1]),
        });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/api/auth', { email, password });
    const { token } = response.data;

    await AsyncStorage.multiSet([
      ['@WDYT:token', token],
      ['@WDYT:user', JSON.stringify({ name: 'Zé' })],
    ]);

    setData({ user: { name: 'Zé' }, token });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@WDYT:token', '@WDYT:user']);

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
