import React from 'react';
import Images from "./images.json";
import ImageContainer from "./components/ImagesContainer"
import './App.css';
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(document.body)

const App = () => (
  <div className ="body">
    <nav className="navbar">
      <a className="navbar-brand">React Game App</a>
    </nav>
    <div className="jumbotron jumbotron-fluid text-center bg-dark text-white">
      <div className="container">
        <h1 className="display-4">ANIMAL GIPHY CLICKY GAME!</h1>
        <p className="lead">Click on a gif to earn points, but don't click on any more than once! <i class="far fa-hand-pointer"></i>

</p>
      </div>
    </div>
    <ImageContainer />
  </div>
);

export default App;
