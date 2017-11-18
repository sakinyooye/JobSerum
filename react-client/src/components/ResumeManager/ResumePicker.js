import React from 'react';
import axios from 'axios'; 
import Iframe from 'react-iframe'; 
import GooglePicker from 'react-google-picker'; 
import DEVELOPER_KEY from '../../../../server/keys/googlePicker.js'; 
import GOOGLE_OAUTH from '../../../../server/keys/googleOAuth.js'; //lol

export default class ResumePicker extends React.Component {
  constructor(props) {
    super(props);
    // console.log('these are the props in the ResumeFrame: ', this.props)
    // this takes in a prop called this.props.targetDocument. 
      // it can evaluate to either 'resume' or 'coverLetter'
    // it also takes in a prop called 'updateName', which is a function that updates the name of the target document
    // this also takes in a prop called this.props.recordId, which is retrieved from RecordTableEntry.js
    this.state = {  
      openInGoogleEditorURL : undefined, 
      documentName : null,   
    };
    this.handleDocumentAdd = this.handleDocumentAdd.bind(this)
  }

  handleDocumentAdd(data) {
    // when you add a document, two things need to happen: 
      //1. the name and url of the document need to get posted to the db
      // for the current records. 
      //2. the name of the document needs to be updated on the RecordsTableEntry
    if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
      // console.log('this is the url', data.docs[0].url)
      let openInGoogleEditorURL = data.docs[0].url
      let documentName = data.docs[0].name
      // axios request to the db to add the embedded urls
      // targetDocument will either be 'resume' or 'coverLetter'
      axios.post(`docs/${this.props.targetDocument}`, {
        name : openInGoogleEditorURL, 
        url : documentName, 
        recordId : this.props.recordId, 
      })
      .then((response) => {
        let resURL = response.data.openInGoogleEditorURL
        let resName = response.data.documentName
        this.setState({openInGoogleEditorURL : resURL})
        this.setState({documentName : resName})
        // this updates the name on the recordsTableEntry. 
        this.props.updateName(resName)
      })
    }
  }

  render() {
    return  (
    <GooglePicker 
      clientId={GOOGLE_OAUTH.GOOGLE_CLIENT_ID}
      developerKey={DEVELOPER_KEY.GOOGLE_PICKER_KEY}
      scope={['https://www.googleapis.com/auth/drive']}
      onChange={data => console.log('on change:', data)}
      multiselect={true}
      navHidden={true}
      authImmediate={false}
      viewId={'FOLDERS'}
      createPicker={(google, oauthToken = this.props.accessToken) => {
        const googleViewId = google.picker.ViewId.DOCS_IMAGES_AND_VIDEOS
        const DOCS_IMAGES_AND_VIDEOS = new google.picker.DocsView(googleViewId)
          .setIncludeFolders(true)
          .setMimeTypes('application/vnd.google-apps.folder')
          .setSelectFolderEnabled(true);

        const picker = new window.google.picker.PickerBuilder()
          .addView(DOCS_IMAGES_AND_VIDEOS)
          .setOAuthToken(oauthToken)
          .setDeveloperKey(DEVELOPER_KEY.GOOGLE_PICKER_KEY)
          .setCallback(this.handleDocumentAdd);

        picker.build().setVisible(true);
        }
      }
      >
      <button>Add A Resume</button>
      <div className="google"></div>
    </GooglePicker>
    )
  }
}