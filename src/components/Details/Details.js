import React from "react";

export const Details = (props) => {
  const { item } = props;
  return (
    <div>
      <table>
        <thead>
          <td>Id</td>
          <td>Product</td>
          <td>SubTotal</td>
          <td>IVA</td>
          <td>Total</td>
        </thead>
        <tbody>
          {item.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.price}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
