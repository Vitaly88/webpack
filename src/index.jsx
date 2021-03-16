// import Post from "models/Post";
import React from "react";
import { render } from "react-dom";
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import "./babel";
import "./styles/styles.css";
import "./styles/scss.scss";
// import WebpackLogo from "./assets/webpack-logo";

// const post = new Post('Halli Hallo Title', WebpackLogo)

const App = () => (
  <div class="container">
    <h1>Webpack Course</h1>
    <hr />
    <div class="logo"></div>
    <hr />
    <div class="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

// console.log(post)
// console.log('JSON:',json)
// console.log('XML', xml)
// console.log('CSV', csv)
