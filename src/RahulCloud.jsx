import React from "react";
import Data from "./Data";
import Header from "./components/Header";
import About from "./components/About";

function RahulCloud() {
  return (
    <>
      <Header Data={Data} />
      <About Data={Data} />
    </>
  );
}

export default RahulCloud;
