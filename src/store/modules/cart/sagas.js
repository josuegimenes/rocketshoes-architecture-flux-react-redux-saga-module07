import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

/**
 * O asterisco ao final da function é como um 'async function', porém,
 * usaremos o método Generator por ser um recurso do próprio JavaScript e
 * mais amplo.
 * Para representar o "await" usaremos o 'yield' também do Generator.
 */

function* addToCart({ id }) {
  /**
   * O redux-saga não aceita o método 'api.get()' para uma chamada assíncrona,
   * então, é necessário usar o método 'call()' do redux-saga.
   */
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
