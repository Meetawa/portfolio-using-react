import React from "react";
import Data from "./Data";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";

function RahulCloud() {
  return (
    <>
      <Header Data={Data} />
      <About Data={Data} />
      <Education Data={Data} />
    </>
  );
}

export default RahulCloud;
