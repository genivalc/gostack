import React from 'react';

import SinIn from './pages/SignIn';
//import SinUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = () => (
<>
    <AuthProvider>
      <SinIn />
    </AuthProvider >

    <ToastContainer />

      <GlobalStyle />
  </>
);

export default App;
