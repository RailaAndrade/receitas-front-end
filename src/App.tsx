import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';
import { GlobalStyle } from './styles/globals';



const App: React.FC = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;