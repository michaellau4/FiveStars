import React from 'react';
import BusinessCard from './business_card';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchBusinesses()
      .then(() => {this.setState({loading: false})})
  }

  render() {
    if (this.state.loading) return null;
    return (
      <div className="business-list-page">
        <div className="business-list-page-container">
          <h3>All Results</h3>
          {this.props.businesses.map((business, idx) => {
            return (
              <div>
                <BusinessCard key={idx} business={business} id={idx}/>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}

export default Index;