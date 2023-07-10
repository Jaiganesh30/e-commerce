import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { cartDetails } from "../../redux/reducerSlice/counterSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
interface conetent {
  data: any;
}
interface cartItem {
  id: number;
  price: number;
  count: string;
  item: any;
}

export const Content: React.FC<conetent> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useLocation();
  console.log(params);
  const info = useAppSelector((state: any) => state.counter.data);
  const cartData = useAppSelector((state: any) => state.counter.cartData);
  console.log("cartData", cartData);
  const [num, setnum] = useState<string>("");
  const [cartItems, setCartItems] = useState<cartItem[]>(cartData);

  const onAddtocart = (id: number, price: number, count: string, item: any) => {
    if (+count < 0) return;
    setCartItems((prevItems) => [
      ...prevItems,
      { id: id, price: price, count: count, item: item },
    ]);
    setnum("");
  };

  useEffect(() => {
    dispatch(cartDetails(cartItems));
  }, [cartItems]);

  return (
    <>
      <h1>VIEW YOUR CONTENTS</h1>
      <button onClick={() => navigate("/")}>Back</button>
      <button onClick={() => navigate("/cart")}>View Cart</button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          margin: "auto",
          backgroundColor: "black",
          marginTop: "10px",
          color: "white",
        }}
      >
        {info &&
          params?.state?.map((item: any) => (
            <>
              <h1 style={{ cursor: "pointer" }}>
                <a title={item.title}>{item.title}</a>
              </h1>
              <img src={item.images[0]} />
              <h3 style={{ display: "inline", color: "lightsalmon" }}>
                Price: <h1>${item.price}</h1>
                <button
                  style={{
                    background: "transparent",
                    color: "lightgreen",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                  onClick={() => onAddtocart(item.id, item.price, num, item)}
                  disabled={!num}
                >
                  {!cartItems.find((items) => items.id === item.id)
                    ? "CLick to add item to cart"
                    : "Items added successfully"}
                </button>
                <input
                  type="number"
                  value={num[item.id]}
                  style={{
                    width: "15%",
                    padding: "10px",
                    borderRadius: "50px",
                    marginLeft: "10px",
                  }}
                  onChange={(e) => setnum(e.target.value)}
                />
              </h3>
              <hr
                style={{
                  width: "100%",
                  borderBlock: "1px solid white",
                }}
              ></hr>
            </>
          ))}
      </div>
    </>
  );
};
