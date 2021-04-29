import React, { createContext, useCallback, useState, useContext } from 'react';

import {api} from '../services/api';

interface Usuario {
  id: string;
  nome: string;
  login: string;
}

interface AuthState {
  token: string;
  usuario: Usuario;
}

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  usuario: Usuario;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
      const token = localStorage.getItem('@Receitas:token');
      const usuario = localStorage.getItem('@Receitas:usuario');

      if (token && usuario) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, usuario: JSON.parse(usuario) };
      }

    return {} as AuthState;
    });

  const signIn = useCallback(async ({ login, senha}) => {
    const response = await api.post('sessions', { login, senha });

    const { token, usuario } = response.data;

    localStorage.setItem('@Receitas:token', token);
    localStorage.setItem('@Receitas:usuario', JSON.stringify(usuario));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Receitas:token');
    localStorage.removeItem('@Receitas:usuario');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ usuario: data.usuario, signIn, signOut}}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
