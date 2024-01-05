import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Jor-El is a global agri-export company that is transforming agriculture sustainably. Expertise in grain, cocoa, nuts, spices, and coffee, fostering innovation, quality, and ethical practices for a positive impact worldwide."
        data-rh="true"
      />
      <meta name="author" content="Hall Enoch Asanda" />
      <meta
        itemprop="name"
        content="Jorel Agriculture Exports,Jorel Agri Exports,Jor-el-exporters, Jor-el Agri, Jor-el Agri-Exporters, jor-el agri, jor-el agri-exporters, jor-el-exporters, Jor-el-Exporters & Consults Company Limited, jorel agriculture exports, jorelagri, jorelagri.com, jorel exports, jorel agriculture, jorel,jor-el, exports,agriculture"
      />
      <title>Jorel Agriculture Exports</title>
    </Helmet>
    <App />
  </BrowserRouter>
);
