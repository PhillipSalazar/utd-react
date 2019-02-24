import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Signup from './signup/signup.js';


class App extends Component {
  render() {
    return (
      <div className="App">


         <div>
        <div  id="t1">
          <div  id="t2">
            <div  id="t3">
              <div id="t4">
                <section>
                  <ul>
                    <a href="#t1"> <FontAwesomeIcon icon={faCoffee} id="uno"/></a>
                    <a href="#t2"> <FontAwesomeIcon icon={faCoffee} id="dos"/></a>
                     <a href="#t3"> <FontAwesomeIcon icon={faCoffee} id="tres"/></a>
                    <a href="#t4"> <FontAwesomeIcon icon={faCoffee} id="cuatro"/></a>
                  </ul>
                  <div className="page" id="p1">
                    <li className="icon fa fa-keyboard-o">
                      <span className="title">
                        <Signup>
                        </Signup>
                      </span>
                      </li>
                  </div>
                  <div className="page" id="p2">
                    <li className="icon fa fa-keyboard-o"><span className="title">Type</span></li>
                  </div>
                  <div className="page" id="p3">
                    <li className="icon fa fa-coffee"><span className="title">Coffee</span></li>
                  </div>
         <div className="page" id="p4">
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
