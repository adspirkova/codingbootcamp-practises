import React from 'react';
import ReactDOM from 'react-dom';

import Text from './Text.js';

class App extends React.Component {
    render(){
        return (
            <div className="app">
                
                This is the App component.
                <Text content="First Component"/>
                <Text content="Second Component"/>
            </div>
        )
    }
}

export default App;