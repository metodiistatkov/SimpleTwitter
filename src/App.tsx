import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


class Status extends React.Component<{}, {textStatus: string;}>{
  constructor(props: String){
    super(props);
    this.state = {
      textStatus: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e: any) {
    console.log("blabla");
    e.preventDefault();
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    this.setState({textStatus: e.currentTarget.value});
  }

  render(){
    return(
      <div>
        <div>
            <label>
              <textarea className = "status-update" name="name" value={this.state.textStatus} onChange = {(e) => this.handleChange(e)} placeholder = "Type your status update here"/>
            </label>
        </div>
      
        <div className = "publish-button">
            <Button variant="outline-light" onSubmit = {(e:any) => this.handleSubmit(e)} >Publish</Button>
        </div>
      </div>  
    );
  }
}

 class Title extends React.Component{
   title: Object = 

  <div className = "title">
    <h1>Soton Tweet</h1>
  </div>;

  render(){
    return this.title;
  }

}

class Feed extends React.Component{
   items: Array<String> = ['Item 1', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2'];

  render(){
    
    return(
      this.items.map((item) =>
      <div className = "single-card">
        <ul>{item}</ul>
      </div>
      )
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Title/>
        <Status/>
        <div className = "cards-for-feed">
          <div className = "feed-title">
            <h2>Feed</h2>
          </div>
          <Feed/>
        </div>

      </div>
    );
  }
}

export default App;
