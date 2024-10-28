import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CartItem = ({ product }) => {
  return (
    <ItemContainer>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>Quantity: {product.quantity}</p>
      <p>Total: ${product.price * product.quantity}</p>
    </ItemContainer>
  );
};

export default CartItem;
