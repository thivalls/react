import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';

import * as actionsCart from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, removeFromCart, changeAmountRequest }) {
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
                        changeAmountRequest(product.id, 'DECREASE')
                      }
                      size={20}
                      color="#7159c1"
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      onClick={() =>
                        changeAmountRequest(product.id, 'INCREASE')
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
                  onClick={() => removeFromCart(product.id)}
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

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionsCart, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
