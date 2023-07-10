import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Header from "../components/Header";
import "./cart.css";

interface cartItem {
  id: number;
  price: number;
  count: string;
  item: any;
}

export const Cart: React.FC<cartItem> = () => {
  const cartDetails = useAppSelector((state: any) => state.counter.cartData);
  const [conversion, setConversion] = useState<boolean>();
  console.log(cartDetails);
  const getTotalCost = () => {
    let cost = 0;
    cost = cartDetails.reduce(
      (accumVariable: any, curValue: any) =>
        accumVariable + curValue.price * curValue.count,
      cost
    );

    return cost;
  };
  return (
    <div>
      <Header />
      <h1>Cart Items</h1>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <table>
          <>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Total Cost</th>
              </tr>
              {cartDetails.map((item: any) => (
                <tr>
                  <td>
                    <img
                      src={item?.item?.images[0]}
                      style={{ width: "40px", height: "30px" }}
                    />
                  </td>
                  <td>{item.item?.title}</td>
                  <td>{item.count}</td>
                  <td>$ {item.price}</td>
                  <td>$ {item.price * item.count}</td>
                </tr>
              ))}
            </thead>
          </>
        </table>
        <h1>Total cost of items added: $ {getTotalCost()}</h1>
        <p
          style={{ cursor: "pointer" ,textDecoration:'underline'}}
          onClick={() => setConversion(!conversion)}
        >
          Click her to see price conversion in INR
        </p>
        {conversion && (
          <p style={{ fontWeight: "bold" }}>INR: {getTotalCost() * 84}</p>
        )}
      </div>
    </div>
  );
};
