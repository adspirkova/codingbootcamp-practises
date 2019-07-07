import React, { Component } from 'react'
import './App.scss'

import Search from '../Search/Search.jsx'

class Result extends Component {
    render() {
        const nameList = this.state.characterNames.map((name, index) => {
            return (
               <div key={`name - ${index}`}>
                   <h2>{name}</h2>
               </div>
            )
            })
            return (
                <div>
                    <h1>Star wars</h1>
                    <div>{nameList}</div>
                </div>
            )
    }
}

export default App;
