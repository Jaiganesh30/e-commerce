import React from "react";
import facebook from "../../assets/facebook.jpg";
import twitter from "../../assets/twitter.jpg";
import instagram from "../../assets/instagram.jpg";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "25vh",
        backgroundColor: "darkgrey",
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        // paddingLeft: "30px",
        // paddingRight: "30px",
      }}
    >
      <div>
        <h1 style={{ paddingLeft: "15px" }}>Hey! Need to know more about us</h1>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            textDecoration: "underline",
          }}
        >
          <li>About Us </li>
          <li style={{ paddingLeft: "15px" }}> Contact </li>
          <li style={{ paddingLeft: "15px" }}> Terms & Condition </li>
        </ul>
      </div>
      <div>
        <h3>Follow us on</h3>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            textDecoration: "underline",
          }}
        >
          <li style={{ paddingLeft: "15px" }}>
            <img src={facebook} style={{ width: "50px", height: "50px" }} />
          </li>
          <li style={{ paddingLeft: "15px" }}>
            {" "}
            <img src={twitter} style={{ width: "50px", height: "50px" }} />
          </li>
          <li style={{ paddingLeft: "15px" }}>
            {" "}
            <img src={instagram} style={{ width: "50px", height: "50px" }} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
