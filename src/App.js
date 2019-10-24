import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Redux */
import { Provider } from 'react-redux';

/* Reactotron */
import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
