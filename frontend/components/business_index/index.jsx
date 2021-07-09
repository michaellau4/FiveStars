import React from 'react';
import BusinessCard from './business_card';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    return (
      <div className="business-list-page">
        <div className="business-list-page-container">
          <h3>All Results</h3>
          {this.props.businesses.map((business, idx) => (
            <BusinessCard key={idx} business={business} id={idx}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Index;