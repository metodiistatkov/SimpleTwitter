import * as React from 'react';
import './App.css';



 class Title extends React.Component{
   title: Object = 

  <div className = "title">
    <h1>TwitterSoton</h1>
  </div>

  render(){
    return this.title;
  }

}

class Feed extends React.Component{
   items: Array<String> = ['Item 1', 'Item 2'];

  render(){
    
    return(
      this.items.map((item) =>
        <ul>{item}</ul>
      )
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>

        <div>
          <Title/>
        </div>

        <div className = "cards-for-feed">
          <Feed/>
        </div>

      </div>
    );
  }
}

export default App;
