import React from 'react';

import SinIn from './pages/SignIn';
//import SinUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
<>
    <AppProvider>
      <SinIn />
    </AppProvider >

      <GlobalStyle />
  </>
);

export default App;
