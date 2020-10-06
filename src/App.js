import React from "react";
import "./App.css";
import CMToast from "./lib/cmToast";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CMToast header="stupid" body="think youj asdfasdfasdfasdfasdfasdfsare" />
    </div>
  );
}

export default App;
