import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

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

  // Consulta estoque
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currencyAmount = productExists ? productExists.amount : 0;

  const amount = currencyAmount + 1;

  // Checa quantidade no estoque
  if (amount > stockAmount) {
    const { title } = productExists;

    toast.error(
      `O produto ${title} possui apenas ${stockAmount} itens no estoque!`
    );
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
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

    /* O history só faz o redirecionamento depois de finalizar a chamada
    api acima */
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    const { title } = productExists;

    toast.error(
      `O produto ${title} possui apenas ${stockAmount} itens no estoque!`
    );
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
