
import React, { Component } from 'react';
import  KeyPadComponent  from './components/KeyPadComponent.js';
import ResultComponent from './components/ResultComponent.js';
// import './index.css';

class App extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === '=') {
      this.calculate();
    }

    else if(button === 'AC') {
      this.reset();
    }

    else if(button === 'Delete') {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    }
    catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render(){
  return (
    <div className="calculator-body">
      <h1>Calculator App</h1>
      <ResultComponent result={this.state.result}  />
      <KeyPadComponent onClick={this.onClick} />
      
    </div>
  );
}
}

export default App;
