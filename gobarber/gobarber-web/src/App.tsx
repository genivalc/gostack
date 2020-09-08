import React from 'react';

import SinIn from './pages/SignIn';
//import SinUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import {AuthProvider} from './context/AuthContext';

const App: React.FC = () => (
<>
    <AuthProvider>
      <SinIn />
      </AuthProvider >

      <GlobalStyle />
  </>
);

export default App;
