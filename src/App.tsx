import React from "react";
import "./App.css";
import { AppProvider } from "./Provider/AppProvider";
// import { UserRouter } from "./Provider/components/routes/AppRoute";

function App() {
  return (
    <div className="App">
      <AppProvider>
        {/* <UserRouter /> */}
      </AppProvider>
    </div>
  );
}

export default App;
