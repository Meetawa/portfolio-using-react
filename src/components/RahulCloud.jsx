import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";
/* 
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects"; */

function RahulCloud() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcomeMessage")}</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">{t("aboutMe")}</a>
            </li>
            <li>
              <a href="#projects">{t("projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/*  <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default RahulCloud;
