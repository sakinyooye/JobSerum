import React from 'react';
import axios from 'axios'; 
import Iframe from 'react-iframe'

export default class ResumeEditor extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editorOpen : false, 
    }
    this.toggleEditor = this.toggleEditor.bind(this)
  }

  toggleEditor() {
    let editorOpen = !this.state.editorOpen
    this.setState({editorOpen})
  }


  render() {
    return (!this.state.editorOpen) ? (
      <div> 
        <button onClick = {this.toggleEditor}> Edit Document </button> 
      </div>
        ) : (
        <div>
          <button onClick = {this.toggleEditor}> Close Editor </button>  
          <Iframe
            url={this.props.url}
            height="450px"
            id={this.state.documentName || '#'} 
            className="Resume"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div> 
      )
  }
}