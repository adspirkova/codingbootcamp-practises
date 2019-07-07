import React from 'react';
import ReactDOM from 'react-dom';
import UploadForm from './UploadForm.js';


export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            is_loading: true
        }
        this.images = []
    }
    
    loadImages() {
        this.setState({
            is_loading: true
        })
        

        fetch('http://localhost:3000/imagesfolder')
        .then(response => response.json())
        .then(parsed_response => {

            this.images = parsed_response
            
            this.setState({
                is_loading: false
            })
        })

    }

    componentDidMount() {
        this.loadImages()
    }

    render(){
        let content = (
            <div className="loader">
                Loading...
            </div>
        )

        if (!this.state.is_loading) {
            content = []

            this.images.forEach(filename => {
                content.push(
                    <div className="image" key={ filename }>
                        <img src={ 'http://localhost:3000/images/' + filename } />
                    </div>
                )
            })
        }

        return(
            <div className="image-manager">
                { /* form */}
                < UploadForm />
                <div className="images">

                    <button onClick={ () => this.loadImages() }>Reload</button>

                    {/* here will be all the images */}
                    { content }

                </div>

            </div>
        )
    }
}
