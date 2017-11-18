import React from 'react';
import axios from 'axios';
import ResumePicker from './ResumePicker'

export default class ResumeField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      resumeName : this.props.resumeName,   
    };
  }

  render() {
    // console.log('these are the props in the coverletterfield' ,this.props)
  	// console.log('this is the default value for the coverLetterName', this.props.coverLetterName)
  	// console.log('this is the coverLetterName', this.props.coverLetterName)
    return (this.props.resumeName !== "") ? (
    	<h5> {this.props.resumeName}</h5>
    	) : (
    	<div> 
	    	<ResumePicker 
	        updateName = {this.props.updateName}
	        recordId = {this.props.recordId} 
	        targetDocument = 'resume'
	      />
      </div> 
    )
  }
}       

