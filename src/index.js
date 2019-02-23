import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



class Index extends React.Component {
  state={
    word:"hello buddy"
  }
  render(){
    return (
        <App />
  );
  }
  
}
const style={
  background:"red",
  fontSize:"20px"

}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



ReactDOM.render(<Index />, document.getElementById('root'));


