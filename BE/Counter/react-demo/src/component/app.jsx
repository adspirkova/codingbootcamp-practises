import React from 'react';
import CounterButton from './CounterButton.jsx';
import CounterDisplay from './CounterDisplay.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        console.log('I got clicked!')
        this.setState(prevState => {
           return {
              count: prevState.count +1,
           }
        })
    }
    render() {
      return (
        <>
          <h1>Hi, I'm counter!</h1>
          
          < CounterDisplay count={this.state.count}/>
          < CounterButton handleClick={this.handleClick}/>
         
        </>
      );
    }
  }