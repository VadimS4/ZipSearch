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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <ImageBoard />
      </div>
    );
  }
}

export default App;
