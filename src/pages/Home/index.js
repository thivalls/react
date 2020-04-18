import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-eagle-2-masculino/20/D16-4893-120/D16-4893-120_zoom1.jpg?ts=1570451717&ims=326x"
          alt="Tenis Nike"
        />
        <strong>tÊNIS MUITO LEGAL</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-eagle-2-masculino/20/D16-4893-120/D16-4893-120_zoom1.jpg?ts=1570451717&ims=326x"
          alt="Tenis Nike"
        />
        <strong>tÊNIS MUITO LEGAL</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-eagle-2-masculino/20/D16-4893-120/D16-4893-120_zoom1.jpg?ts=1570451717&ims=326x"
          alt="Tenis Nike"
        />
        <strong>tÊNIS MUITO LEGAL</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-eagle-2-masculino/20/D16-4893-120/D16-4893-120_zoom1.jpg?ts=1570451717&ims=326x"
          alt="Tenis Nike"
        />
        <strong>tÊNIS MUITO LEGAL</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
