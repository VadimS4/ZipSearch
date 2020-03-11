import React from 'react';
import './App.css';
import Search from '../src/components/Search';
import ImageBoard from '../src/components/ImageBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm : ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("This event has been submitted");
  }

  handleChange(event) {
    console.log(event.target.value)
    // this.setState({
    //   searchTerm: event.target.value
    // })
  }

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <ImageBoard />
      </div>
    );
  }
}

export default App;
