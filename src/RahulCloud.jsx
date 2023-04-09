import React from "react";
import Data from "./Data";
import Header from "./components/Header";
import About from "./components/About";

function RahulCloud() {
  return (
    <div>
      <Header Data={Data} />
      <About Data={Data} />
    </div>
  );
}

export default RahulCloud;
