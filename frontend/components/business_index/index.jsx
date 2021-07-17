import React from 'react';
import BusinessCard from './business_card';
import SearchNav from '../search_nav_bar/search_nav_bar';
import queryString from 'query-string';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchQuery: this.props.location.search.split("=")[1]
    }
  }

  componentDidMount() {
    if (this.state.searchQuery) {
      this.props.searchBusinesses(this.state.searchQuery)
        .then(() => {this.setState({loading: false})});
    } else {
      this.props.fetchBusinesses()
        .then(() => {this.setState({loading: false})})
    }
  }

  render() {
    if (this.state.loading) return null;
    return (
      <div className="business-list-page">
        <SearchNav/>
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