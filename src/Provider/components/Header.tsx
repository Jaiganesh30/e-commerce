import React, { ReactNode } from "react";
import cart from "../../assets/cart.jpg";
import { useNavigate } from "react-router-dom";

interface AppProviderProps {
  children?: ReactNode;
}

const Header = ({ children }: AppProviderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <header
          style={{
            width: "100%",
            height: "15vh",
            backgroundColor: "darkgrey",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // paddingLeft: "30px",
            // paddingRight: "30px",
          }}
        >
          <h1
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            My Products
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => navigate("/cart")}
            >
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>
                  <img src={cart} style={{ width: "50px", height: "50px" }} />
                </span>
                &nbsp;My Cart
              </h1>
            </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => navigate("/auth")}
            >
              <h1>Login</h1>
            </button>
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
