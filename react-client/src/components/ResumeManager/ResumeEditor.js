import React from 'react';
import axios from 'axios'; 
import Iframe from 'react-iframe'

export default class ResumeEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editorOpen : true, 
    }
    this.openEditor = this.openEditor.bind(this)
  }

  openEditor(data) {

  }


  render() {
    return (this.state.editorOpen) ? (
      <div> 
        <button>  </button> 
      </div>
        ) : (
        <div>
          <Iframe
            url='www.google.com'
            // width="450px"
            height="450px"
            // id={this.state.documentName || '#'} 
            className="Resume"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div> 
      )
  }
}