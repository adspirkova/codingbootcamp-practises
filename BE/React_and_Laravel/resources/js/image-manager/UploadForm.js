import React from 'react'
import ReactDOM from 'react-dom'


export default class UploadForm extends React.Component{

    constructor(props){
        super(props) //parent::__construct()
        this.state = {
            is_hidden: true
        }

    }

    closeClick(){
       console.log('The close button was clicked')
       this.setState((previous_state,props) => {
           is_hidden: !previous_state.is_hidden
       })
    }

    render(){

        let className = this.state.is_hidden ? 'hidden' : "";
        let    closeButtonText =  this.state.is_hidden ? 'SHOW' : 'HIDE';
        return(
            <form action="" method="post" encType="multipart/form-data" className={className}>

               <input type="file" name="uploaded_file" />

               <input type="submit" value="Upload!" />

               <div className="close" onClick={ () => this.closeClick() }>{closeButtonText}</div>
            </form>
        )
    }
}
