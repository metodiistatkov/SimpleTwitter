import * as React from 'react';
import './App.css';

const title: Object = 
<div
  style={{
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <h1>TwitterSoton</h1>
</div>

class App extends React.Component{
  
  render(){
    return title;
  }
}

export default App;
