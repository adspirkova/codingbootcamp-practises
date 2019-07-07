import React, { Component } from 'react'
import './App.scss'

import Search from '../Search/Search.jsx'

class App extends Component {
    state = {
        searchInput: '',
        randomArticle: undefined,
        searchResults: [],
    }

    handleTyping = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
        console.log(this.state.searchInput)
    }

    handleSearchClick = () => {
        console.log('Searching')
    }


    loadArticleTitle = (ArticleTitle) => {
        fetch(` http://en.wikipedia.org/wiki/${ArticleTitle}`)
        .then(res => res.json())
        .then(data => {
            this.setState(prevState => {
                const newArticleTitle = prevState.ArticleTitle.concat(data.title)
                return {
                    ArticleTitle: newArticleTitle,
                }
            })
        })
    }

    componentDidMount() {
        // Load random article here.
        for (let i=1; i<=10; i++) {
            this.loadArticleTitle(i)
        }
    }
    
    
    render() {
        return (
            <div className='app-container'>
                <h1>Wikipedia Search</h1>
                <Search
                    handleTyping={this.handleTyping}
                    inputValue={this.state.searchInput}
                    handleSearchClick={this.handleSearchClick}
                />
            </div>
        )
    }
}

export default App;
