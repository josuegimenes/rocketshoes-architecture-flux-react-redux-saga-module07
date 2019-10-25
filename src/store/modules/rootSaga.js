// O rootSaga.js é responsável por juntar todas as Sagas.
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([
    cart,
    // Adicionar aqui as novas sagas
  ]);
}
