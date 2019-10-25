import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

/**
 * O asterisco ao final da function é como um 'async function', porém,
 * usaremos o método Generator por ser um recurso do próprio JavaScript e
 * mais amplo.
 * Para representar o "await" usaremos o 'yield' também do Generator.
 */

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    /**
     * O redux-saga não aceita o método 'api.get()' para uma chamada assíncrona,
     * então, é necessário usar o método 'call()' do redux-saga.
     */
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
