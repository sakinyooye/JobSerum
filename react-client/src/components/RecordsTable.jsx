import React from 'react';
import RecordsTableEntry from './RecordsTableEntry.jsx';
import hf from '../HelperFuncStateStorage';

export default class RecordsTable extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      records: this.props.records
    }
  }

  render() {
    console.log(this.props.records);
    let records = this.props.records
    return (<div className='records-list'>
 <table className="table">
  <thead className="thead-default">
    <tr>
      <th>Company</th>
      <th>Location</th>
      <th>Contact</th>
      <th>Notes</th>
      <th>Tags</th>
      <th>Cover Letter</th>
      <th>Resume</th>
      <th>First Interview</th>
      <th>Second Interview</th>
      <th>Offer</th>
      <th>Reject</th>
    </tr>
  </thead>
  <tbody>
        { records && records.map((record) =>
          <RecordsTableEntry
           searchFunction={this.props.searchFunction}
           key={Math.floor(Math.random() * 1000000)}
           record={record}    
           />
      )}
    </tbody>
    </table>
    </div>
    )
  }
}

// should you want to be more strict:
//RecordsTable.propTypes = {
//  records: React.PropTypes.array.isRequired
//};

