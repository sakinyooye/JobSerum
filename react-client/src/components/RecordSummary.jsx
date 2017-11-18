import React from 'react';
import ContactInput from './FullContact/ContactInput.jsx';
import CoverLetterField from './ResumeManager/CoverLetterField'
import ResumeField from './ResumeManager/ResumeField'
import ResumeEditor from './ResumeManager/ResumeEditor'

export default class RecordSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this is a record' , this.props);
    return (
      <div className="container">
        <div>
          <h1>Record</h1>
          <h3>Contact Details</h3>
          <div>Contact Name: {this.props.recordId.contactValue}</div>
          <div>Contact Email: {this.props.recordId.contactEmailAddress}</div>
          <h4>Social Media Profiles</h4>
          <ul>
          {this.props.recordId.socialProfiles.map((profile, idx) => <ContactInput profile={profile} key={idx}/>)}
          </ul>
        </div>
        <div>
          <h3>Record Detail</h3>
          <div>Company: {this.props.recordId.company.name} </div>
          <div>Location: {this.props.recordId.location}</div>
          <div>Notes: {this.props.recordId.notes} </div>
          <div>Cover Letter: {this.props.recordId.coverLetterName}</div>
          <div> 
            <ResumeEditor
              name = {this.props.recordId.coverLetterName}
              url = {this.props.recordId.coverLetterURL}
            /> 
          </div> 


          <div>Resume:  {this.props.recordId.resumeName} </div>
          <div> 
            <ResumeEditor
              name = {this.props.recordId.resumeName}
              url = {this.props.recordId.resumeURL}
            /> 
          </div> 


          <h2>Status: </h2>
          <div>First Interview: {this.props.recordId.firstInterview ? 'Yes' : 'No'}</div>
          <div>Second Interview: {this.props.recordId.secondInterview ? 'Yes' : 'No'}</div>
          <div>Offer: {this.props.recordId.offer ? 'Yes' : 'No'}</div>
          <div>Rejected: {this.props.recordId.rejected ? 'Yes' : 'No'}</div>
        </div>
      </div>
    )
  }
}
