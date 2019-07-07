import React from 'react';
import Images from "./images.json";
import ImageContainer from "./components/ImagesContainer"
import './App.css';

const App = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Clicky Game</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Click an image to begin!</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Score:</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Top Score:</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
    <ImageContainer />
  </div>
);

export default App;
