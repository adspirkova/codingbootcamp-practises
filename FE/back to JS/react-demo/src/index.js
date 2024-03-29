import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message/message.jsx';
import './index.scss';
import './index.html';

class Hello extends React.Component {
    render (){
       return (
        <>
       <h1>Hello World!</h1>
       <Message title="My title" body="hello body"/>
       <Message title="My second title" body="body body"/>
       <Message title="My last title" body="show me your body"/>
       </>
       );
    }
}

ReactDOM.render(<Hello/>, document.querySelector('#app'));
