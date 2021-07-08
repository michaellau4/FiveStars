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
      <div>
        {this.props.businesses.map((business, idx) => (
          <BusinessCard key={idx} business={business} id={idx}/>
        ))}
      </div>
    )
  }
}

export default Index;