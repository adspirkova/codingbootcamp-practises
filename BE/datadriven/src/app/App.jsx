import React from 'react';



export default class App extends React.Component {
    state = {
        character: {},
        films: [],
        characterNames: [],
    }

    loadCharacter = (characterNumber) => {
        fetch(`https://swapi.co/api/people/${characterNumber}`)
        .then(res => res.json())
        .then(data => {
            this.setState(prevState => {
                const newCharacterNames = prevState.characterNames.concat(data.name)
                return {
                    characterNames: newCharacterNames,
                }
            })
        })
    }

    loadFilms = () => {
        this.state.character.films.map((film, index) => {
            fetch(film)
            .then(res => res.json())
            .then(data => {
                this.setState(prevState => {
                    const films = prevState.films.concat(data)
                    return {
                        films,
                    }
                })
            })
        })
    }

    componentDidMount() {
        for (let i=1; i<=25; i++) {
            this.loadCharacter(i)
        }
    }


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