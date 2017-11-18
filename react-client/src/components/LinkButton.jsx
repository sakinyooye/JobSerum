import React from 'react';

// generic component for link buttons. Used multple times, very straightforward.

export default class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }

  wrapper(e) {
    if(typeof this.props.clickFunction === 'function') {
      console.log('invoked this.props.clickFunction: ', this.props.clickFunction(e));
      this.props.clickFunction(e).then(data => data)
    }
  }



  render() {
   return (
    <div>
      <button type="button" className="btn btn-outline-secondary bg-primary" onClick={(this.wrapper.bind(this))}>
        {this.props.title}
      </button>
    </div>
    )
  }
}
