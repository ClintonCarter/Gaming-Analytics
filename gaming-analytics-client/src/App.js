import React from 'react';
import Controller from './Controller/Controller';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      list: [],
      printType: ''
    }
  }

  setSearchTerm(userInput) {
    this.setState({
      userInput
    });
  }



  componentDidMount() {
    fetch(`https://api.twitch.tv/helix/analytics/games`)
      // ? q = ${ this.state.userInput }
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong');
        } return response;
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        const list = data.items
        this.setState({
          list
        });
      })
      .catch(err => {
        console.log('This is error', err)
      });
  }

  render() {
    return (
      <div className='App'>
        <Controller printType={this.state.printType} setSearchTerm={this.setSearchTerm} />
        {/* <Books list={this.state.list} /> */}
      </div>
    );
  }
}

export default App;
