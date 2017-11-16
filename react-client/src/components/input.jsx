import React from 'react';
import LinkButton from './LinkButton.jsx';
import TagList from './TagList.jsx';
import ContactInput from './FullContact/ContactInput.jsx';

import hf from '../HelperFuncStateStorage';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios'
import ResumeFrame from './ResumeManager/ResumeFrame.js'



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Input extends React.Component {
  constructor(props) {
    super();
    this.state = {        // these represent all of our database row values.
      companyValue: '',
      locationValue: '',
      contactValue: '',
      contactEmail: '',
      socialProfiles: [],
      notesValue: '',
      coverLetter: false,
      resume:false,
      firstInterview: false,
      secondInterview: false,
      offer: false,
      rejected: false,
      tags: [{ id: 1, text: "Sample Keyword" }],
      jobApplicationURL: '',
      jobApplicationText: ''
    };
  }

  //fetch social media profiles from fullcontact api via server route as proxy.
  getSocialProfiles(){
    console.log(this.state.contactEmail);
    axios.post('/fullContact', {contactEmail: this.state.contactEmail})
    .then((response) => {
      this.setState({socialProfiles: response.data})
      console.log(this.state.socialProfiles);
    })
    .catch((err) => console.log('GETSOCIALPROFILE ERROR: ', err));
  }

  render() {
    // console.log(this.state)
    return (
      <div className="container w-50 p-3">
      <form onSubmit={(e) => {
        e.preventDefault(); //this just prevents the page from refreshing upon every submit
        hf.onSubmit(this);
      }}>
      <label><h3>Descriptive Information</h3></label>

      <div className="form-group w-50 p-3">   {/* delightful bootstrap */}
        <label>Company</label>
        <input id="company" type="text" className="form-control" value={this.state.companyValue} onChange={(e) => {
          hf.updateFieldValue(this, 'companyValue', e)
        }} />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input type="text" id="location" className="form-control" value={this.state.locationValue} onChange={(e) => {
          hf.updateFieldValue(this, 'locationValue', e)
        }} />
      </div>

      <div className="form-group">
        <label>Contact</label>
        <input type="text" className="form-control" value={this.state.contactValue} onChange={(e) => {
          hf.updateFieldValue(this, 'contactValue', e)
        }} />
      </div>

      <label><h3>Contact Social Media Info</h3></label>
      <div className="form-group">
        <label>Contact Email</label>
        <input type="text" className="form-control" value={this.state.contactEmail} onChange={(e) => {
          hf.updateFieldValue(this, 'contactEmail', e)
        }} />
      </div>

      <div className="btn">
        <button type="button" className="btn btn-outline-secondary bg-primary" onClick={this.getSocialProfiles.bind(this)}>
          Get Social Media Profiles
        </button>
      </div>
      
      <div className="form-group">
        {this.state.socialProfiles.length ? <label><h4>Social Media Profiles</h4></label> : null}
        {this.state.socialProfiles.length ? this.state.socialProfiles.map((profile, idx) => <ContactInput profile={profile} key={idx}/>) : null}
      </div>

      <div className="form-group">
        <label><h3>Notes</h3></label>
        <input type="text" className="form-control" value={this.state.notesValue} onChange={(e)=> {
          hf.updateFieldValue(this, 'notesValue', e)
        }} />
      </div>

      <label><h3>Job Application Keywords</h3></label>

      <div className="form-group">
        <label>Job Application URL</label>
        <input type="text" className="form-control" value={this.state.jobApplicationURL} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationURL', e)
        }} /> 
      </div>

      <div className="form-group">
        <label>Job Application Text</label>
        <textarea type="text" rows="5" className="form-control" value={this.state.jobApplicationText} onChange={(e)=> {
          hf.updateFieldValue(this, 'jobApplicationText', e)
        }} /> 
      </div>

      <div className="btn">
        <LinkButton title='Populate Keywords' clickFunction={this.props.parse.bind(this, [this.state.jobApplicationURL, this.state.jobApplicationText])} />
      </div>
      
      <div className="form-group">
        <label><h4>Keywords</h4></label>
        <TagList tags={this.state.tags} onChange={(e)=> {
          hf.updateFieldValue(this, 'tags', e)
        }} />
      </div>

      <label><h3>Progress</h3></label>

      <div className="checkbox">
        <label>
          <input type="checkbox" value={this.state.coverLetter} onChange={(e) => {
          hf.toggleCheckBox(this, 'coverLetter', e)
          }} />
          Cover Letter
      </label>
      </div>
      <div className="checkbox">
        <label>  
        <input type="checkbox" value={this.state.resume} onChange={(e) => {
            hf.toggleCheckBox(this, 'resume', e)
          }} />
          Resume
        </label>
        <label>
          <Link to='/resumeSubmit'>
            <button type="submit" className="btn btn-outline-secondary bg-secondary btn-xs">Submit Resume</button>
          </Link>
        </label>
      </div>
      <div className="checkbox">
        <label>
        <input className="checkbox" type="checkbox" value={this.state.firstInterview} onChange={(e) => {
          hf.toggleCheckBox(this, 'firstInterview', e)
        }}/>First Interview
        </label>
        </div>
        <div className="checkbox">
          <label>
          <input className="checkbox" type="checkbox" value={this.state.secondInterview} onChange={(e)=> {
            hf.toggleCheckBox(this, 'secondInterview', e)
          }}/>Second Interview
          </label>
        </div>
        <div className="checkbox">
        <label>
          <input className="checkbox" type="checkbox" value={this.state.offer} onChange={(e)=> {
            hf.toggleCheckBox(this, 'offer', e)
          }}/>Offer
          </label>
        </div>
        <div className="checkbox">
        <label>
          <input className="checkbox" type="checkbox" value={this.state.rejection} onChange={(e)=> {
            hf.toggleCheckBox(this, 'rejected', e)
          }}/>Rejected
        </label>
        </div>
      <div>
          <button type="submit" className="btn btn-default btn-outline-secondary" onClick={this.handleClick}> Save </button>
            <Link to={`/`} className="btn">
              <button type="submit" className="btn btn-primary btn-outline-primary" onClick={this.handleClick}> Return to Records Page </button>
            </Link>
      </div>
      </form>
      </div>
    );
  }
}
