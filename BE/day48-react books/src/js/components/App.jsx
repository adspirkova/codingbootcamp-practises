import React from 'react';

import Wall from './Wall.jsx';
import Quote from './Quote.jsx';
import AddQuote from './AddQuote.jsx';


class App extends React.Component {
    state = {
        AddInput: '',
        NewQuote: [],
        quotes: [],
    }



    componentDidMount() {
        fetch('http://quotes.podlomar.org/api/quotes')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                quotes: data
            })
        })        
    }
    
    render() {
        const wallComponents = this.state.quotes.map((quote, index) => {
        return (
                < Wall 
                key={quote.key}
                user = {quote.user}
                text = {quote.text}
                commentsCount = {quote.commentsCount}
                likesCount = {quote.likesCount} />
                )
            })
        return (
            <>
            < AddQuote />
            {wallComponents}
            </>
        )
    }
}


export default App;


