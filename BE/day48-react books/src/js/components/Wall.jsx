import React from 'react';
import Quote from './Quote.jsx';


const Wall = (props) => (
       <div>
           <p>Quote:  {props.text}</p>
           <h6>Author: {props.user}</h6>
       </div>
)


export default Wall;