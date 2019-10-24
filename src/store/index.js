import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

/* Configurando Reactotron-Redux para rodar somente em ambiente dev */
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
/* FIM */

const store = createStore(rootReducer, enhancer);

export default store;
