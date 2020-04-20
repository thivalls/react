import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, changeAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExist = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;
  const amount = currentAmount + 1;

  if (stockAmount < amount) {
    toast.error('Quantidade solicitada indisponível em estoque');
    return;
  }

  if (productExist) {
    yield put(changeAmountSuccess(id, 'INCREASE'));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // dispatch from saga using put method
    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* changeAmountCart({ id, action }) {
  const productExist = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const currentAmount = productExist ? productExist.amount : 0;

  if (action === 'INCREASE') {
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const amount = currentAmount + 1;
    if (stockAmount < amount) {
      toast.error('Quantidade solicitada indisponível em estoque');
      return;
    }
  }

  if (action === 'DECREASE' && currentAmount <= 1) {
    toast.error(
      'Quantidade não pode ser 0, remova esta linha caso não deseje o produto.'
    );
    return;
  }

  // dispatch from saga using put method
  yield put(changeAmountSuccess(id, action));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/CHANGE_AMOUNT_REQUEST', changeAmountCart),
]);
