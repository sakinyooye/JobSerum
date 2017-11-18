import React from 'react';
import hf from '../HelperFuncStateStorage';
import axios from 'axios';
import LinkButton from './LinkButton.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import Axios from 'axios';

export default class newsItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    // this.state = {
    //     news: this.props.news
    // }
  }

  // delete function.

  render() {

    const listItems = this.props.news.map((company, i) => {
       console.log(company.data);
        return(
        <div>
            <h2>Company Placeholder</h2>
            <ul className="list-inline" key={i}>
                {company.data.articles.map((data, i) =>  
                    <li className="list-group-item" key={i}>
                        {data.title}
                        {data.description}
                    </li>
                )}
            </ul>
        </div>
       )
    })

    //let nameObj =Object.assign({}, this.props.record.company);
    //console.log(nameObj.name);
    return (
    <div>
            {listItems}
    </div>
  )
}}


// this code may help you make sure that the object you pass to the RecordsTableEntry is an array.
// not implemented or tested though.
//RecordsTableEntry.proptypes = {
//  record: React.PropTypes.object.isRequired
//};
