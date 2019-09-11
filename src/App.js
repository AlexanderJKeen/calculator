import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    count:["0"],
    keys: [
      {value:"clear", styleName: "clearButton"}
    ]
  };
  handleButton = (value) => {
    if(value === "Clear"){
      this.setState({count: ["0"]})
    }else if (value === "="){
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
    } else{
      this.setState(prevState => ({
        count: [...prevState.count, value]
      }))
    }
  }

  render() {
    let array = ["Clear","/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2","3","+", "0", "="]
    return (
      <div>
        <h1>{this.state.count}</h1>
        {array.map(value => {
          return ( <Button  handleButton = {this.handleButton} display = {value}/>
        )})}
       
      </div>
     );
  }
  
}
const Button = (props) =>{
  return (
    <button onClick={() => props.handleButton(props.display)}>{props.display}</button>
  )
}

export default App;
