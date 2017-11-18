import React from 'react';
import Logo from './Logo.jsx';
import LinkButton from './LinkButton.jsx';
import SearchBar from './SearchBar.jsx';
import RecordsTable from './RecordsTable.jsx';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import RecordSummary from  './RecordSummary.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import Input from './input.jsx';
import axios from 'axios';
import ResumeFrame from './ResumeManager/ResumeFrame.js'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

// hf holds the helper functions
import hf from '../HelperFuncStateStorage';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      records: [{}],    // you need to initialize the records as blank - our axios request is asynchronous
      userRecords: [{}],
      currentRecordId: 0, 
      displayName : null, 
      accessToken : null,
      refreshToken : null, 
      googleId : null, 
      companyList: null
    }

    // these four calls could be combined into one, but it is nice to have them 
    // seperate for modularity. 
    this.getDisplayName = this.getDisplayName.bind(this); 
    this.getAccessToken = this.getAccessToken.bind(this); 
    this.getRefreshToken = this.getRefreshToken.bind(this); 
    
    this.filterByGoogleId = this.filterByGoogleId.bind(this); 
    // the below calls the above: 
    this.getGoogleId = this.getGoogleId.bind(this); 
   
    this.handleSearch = this.handleSearch.bind(this); 
    this.resetRecords = this.resetRecords.bind(this); 
  }

  componentDidMount() { 
    // these just populate state so that information can be sent down. 
    this.getDisplayName(); // this has a seperate call so that the page will render on the first request. 
    this.getAccessToken();
    this.getRefreshToken();
    // in the promise for getGoogleId, filterByGoogleId is run which filters the records
    // by the googleId in the backend. 
    this.getGoogleId();

    this.resetRecords() // this is last so that it can do it based on the user's id.  
  }

  getDisplayName() {
    // use axios to get the current session and then setState to the displayName
    axios.get('/session/displayName')
    .then((response) => {
      this.setState({displayName : response.data})
    })
  }

  getAccessToken() {
    axios.get('/session/all')
    .then((response) => {
      console.log('accessToken', response.data.user.accessToken)
      let accessToken = response.data.user.accessToken
      this.setState({accessToken})
    })
  }

  getRefreshToken() {
    axios.get('/session/all')
    .then((response) => {
      // console.log('this is the response of the getSession func', response.data)
      // set the state with the authKey. 
      let refreshToken = response.data.user.refreshToken
      this.setState({refreshToken})
    })
  }

  filterByGoogleId(googleId) { 
    console.log('this shit gets run')
    axios.get(`/records/`, {params: {googleId: googleId}}).then((response)=> {
      console.log('the axios request is getting some response', response)
      let userRecords = response.data; 
      this.setState({userRecords})
    }) 

  }
  
  getGoogleId() {
    axios.get('/session/all')
    .then((response) => {
      let googleId = response.data.user.id
      this.filterByGoogleId(googleId)
      this.setState({googleId})
    })
  }


  resetRecords(e) {    // needed when you click on the records button
    axios.get('records')
      .then((records) => {
        this.setState({records : records.data})
    })
  }

  handleSearch(query) {
    axios.post('search', { searchValue: query })
      .then(function (response) {
        // console.log(response.data)
        this.setState({records: response.data});  // no search results component, just set the state with the results of our search
      }.bind(this))
      .catch(function (error) {
        console.error('error', error);
      });
    return null;
  }


  //set recordId state for record summary route onclick of info button 
  setCurrentRecord(id) {
    this.setState({currentRecordId: id}).bind(this);
  }


  // componentWillUpdate() {
  //   console.log(this.state.companyList);
  // }
  

  render() {
    
    return (this.state.displayName === null) ? (<Login getUser = {this.getUser} />) : 
     (
      <Router>
        <div>
            <nav className="navbar navbar-default">     {/* these classNames refer to bootstrap properties */}
              <div className="container-fluid">
                <ul className="nav navbar-nav navbar-legt">
                  <li className="logo"><Logo />
                  </li>

                  <li className="link-button">
                    <Link to="/dashboard">
                      <LinkButton title='Dashboard' />
                    </Link>
                  </li>

                  <li className="link-button">
                    <Link to="/">
                      <LinkButton title='Records' clickFunction={this.resetRecords.bind(this) }/>
                    </Link>
                  </li>

                  <li className="link-button">
                    <Link to="/input">
                      <LinkButton title='Insert' clickFunction={() => {}} />
                    </Link>
                  </li>

                  <li className="link-button">
                    <Link to="/docs">
                      <LinkButton title='Documents' clickFunction={() => {}} />
                    </Link>
                  </li>

                </ul>
                <ul className="nav navbar-nav">
                  <li className="navbar-text navbar-center align-top search-bar">
                    <SearchBar search={this.handleSearch.bind(this)}/>
                  </li>
                </ul>
                <ul className="nav navbar-nav">
                  <li className="navbar-text navbar-center align-top search-bar">
                    <h4> Welcome Back {this.state.displayName.split(" ")[0]}!</h4> 
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="logout-button">
                    <a href="/logout">
                      <LinkButton title='Logout' clickFunction={() => {
                        axios.get('/logout')
                      }}/>  
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* use react router to only show one of our components at a time */}
            <Route exact path="/" render={() => 
              <RecordsTable records={this.state.records} 
                searchFunction={this.resetRecords.bind(this)} 
                googleId={this.state.googleId}
              /> } />
            <Route exact path="/dashboard" render={() => <Dashboard /> } />
            <Route exact path="/contact" render={() => <ContactPage googleId={this.state.googleId} /> } />
            <Route exact path="/input" className="col-md-6 col-md-offset-3" 
              render={() =>
                <Input
                  refresh={this.resetRecords.bind(this)}
                  parse={hf.loadApplicationKeywords}
                  googleId={this.state.googleId}
                />
              }
            />
            <Route exact path="/docs" render={() =>
              <ResumeFrame
                accessToken={this.state.accessToken}
                refreshToken={this.state.refreshToken} 
                googleId={this.state.googleId}
              />} 
            />
            <Route exact path="/record/:recordID" className="col-md-6 col-md-offset-3" render={({ match }) => 
              <RecordSummary recordId={this.state.records[match.params.recordID - 1]} />
            } />
        </div>
      </Router>
    )
  }
}

export default App