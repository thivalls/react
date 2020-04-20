import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';

import * as ActionsCart from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((calcTotal, product) => {
        return calcTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      onClick={() =>
                        dispatch(
                          ActionsCart.changeAmountRequest(
                            product.id,
                            'DECREASE'
                          )
                        )
                      }
                      size={20}
                      color="#7159c1"
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      onClick={() =>
                        dispatch(
                          ActionsCart.changeAmountRequest(
                            product.id,
                            'INCREASE'
                          )
                        )
                      }
                      size={20}
                      color="#7159c1"
                    />
                  </button>
                </div>
              </td>
              <td>{formatPrice(product.subtotal)}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch(ActionsCart.removeFromCart(product.id))
                  }
                  type="button"
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
