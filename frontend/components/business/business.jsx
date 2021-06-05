import React from 'react';

class Business extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="business-container">
        <li>{this.props.business.id}</li>
      </div>
    )
  }
}

export default Business;
