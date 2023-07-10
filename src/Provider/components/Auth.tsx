// import { get } from "http";
import React, { useRef } from "react";
import { Form } from "react-router-dom";
import Header from "./Header";

export const Auth: React.FC = () => {
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div>
      <Header />
      <Form
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          width: "70%",
          backgroundColor: "black",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <label
          style={{
            color: "orange",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          Email
        </label>
        <input
          style={{
            height: "30px",
            width: "70%",
            background: "transparent",
            color: "white",
          }}
          type="email"
          name="email"
          ref={email}
        />
        <label style={{ color: "orange", fontWeight: "bold", padding: "20px" }}>
          Password
        </label>
        <input
          style={{
            height: "30px",
            width: "70%",
            background: "transparent",
            color: "white",
          }}
          type="password"
          name="password"
          ref={password}
        />
        <input
          style={{ color: "orange", fontWeight: "bold", padding: "20px",marginTop:'20px' }}
          type="submit"
        />
        Save
      </Form>
    </div>
  );
};

// export async function action(request: any) {
//   const data = await request.formData();
//   const authData = {
//     email: get("email"),
//     password: get("password"),
//   };
// }
