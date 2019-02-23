import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <FontAwesomeIcon icon={faCoffee} />
        </header>
         <div>
        <div  id="t1">
          <div  id="t2">
            <div  id="t3">
              <div id="t4">
                <section>
                  <ul>
                    <a href="#t2"> <FontAwesomeIcon icon={faCoffee} /></a>
                     <a href="#t3"> <FontAwesomeIcon icon={faCoffee} /></a>
                    <a href="#t4"> <FontAwesomeIcon icon={faCoffee} /></a>
                  </ul>
                  <div className="page" id="p1">
                    <li className="icon fa fa-home"><span className="title">Home</span><span class="hint">Like this pen to see the magic!...<br /> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></li>
                  </div>
                  <div className="page" id="p2">
                    <li className="icon fa fa-keyboard-o"><span className="title">Type</span></li>
                  </div>
                  <div className="page" id="p3">
                    <li className="icon fa fa-coffee"><span className="title">Coffee</span></li>
                  </div>
                   
</section>
       
     </div>
              </div>
            </div>
          </div>
   </div>
      </div>
    );
  }
}

export default App;