import React, {useState} from 'react'

const AddQuote = () => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleAddClick = () => {
        const newQuote = {
            user: name,
            text: text
          };
        console.log(newQuote);
          fetch('http://quotes.podlomar.org/api/quotes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            mimeType: 'application/json',
            body: JSON.stringify(newQuote)
        });
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='search-container'>
        <label>Text: </label>
            <input
                type='text'
                value = {text}
                onChange = {handleTextChange}
            />
        <label> User: </label>
            <input
                type='user'
                value = {name}
                onChange = {handleNameChange}
            />
            <button
                onClick={handleAddClick}
            >Add Quote</button>
        </div>
    )
}

export default AddQuote
