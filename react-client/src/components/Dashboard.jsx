import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import hf from '../HelperFuncStateStorage';
import LinkButton from './LinkButton.jsx';
import NewsItems from './NewsItems.jsx';
import axios from 'axios';
import _ from 'underscore';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      //newsFunction: this.props.newsFunction.bind(this),
      news: [],
      companyList: []
    }
  }

  getTopCompanies() {
    return axios.get('recentrecords').then((results) => {
      let returnValue = results.data.slice(0,5);
      console.log(returnValue);
      return _.uniq(returnValue.map((x) => x = x.company.name));
    });
  }
  
  getRecentNews() {
    let newNews = [];
    let renderedCompanies = [];
    this.getTopCompanies()
      .then((results) => {
        console.log('getRecentNews results: ', results);
        if (results && results.length > 0) {
          results.forEach((x) => {
              axios.get(`https://newsapi.org/v2/everything?q=${x}&apiKey=f8ea23698b664c35a7c9598fe183e2ec`).then((x) => newNews.push(x)).then(() => this.setState({news: newNews}))
              console.log('axios get newNews: ', newNews);
            })
          }})
        }
      

    // let CompanyArray = [];
    // this.getTopCompanies((x) => CompanyArray.push(x)).then(() => console.log('CompanyArray in getRecentNews: ', CompanyArray));
    // // return axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f8ea23698b664c35a7c9598fe183e2ec')
    // .then((newsObj) => newsObj.data.articles.slice(0, 10))
    // .then((apiResponse) => {
    //   console.log(apiResponse);
    //   this.setState({news: apiResponse})
    // })
    // .catch((err) => console.log(err));
    // CompanyArray.forEach((x) => axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f8ea23698b664c35a7c9598fe183e2ec').then((x) => news.push(x.name)));
    // this.setState({news: news})


  componentWillUpdate() {
    this.render();
  }

  render() {

    return (<div className='records-list'>
        <LinkButton title="Render News" clickFunction={this.getRecentNews.bind(this)} />
      Recent news:
        <NewsItems news={this.state.news}/>
    </div>

    )
  }
}

//