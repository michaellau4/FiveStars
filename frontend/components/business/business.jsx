import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';

class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFetched: false
    }
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
      .then(() => {this.setState({hasFetched: true})})
  }

  componentDidUpdate(prevProps) {
    if (this.props.business !== prevProps.business) {
      this.props.fetchBusiness(this.props.business.id)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  render() {
    let {business} = this.props
    if (!business) return null;
    return (
      <div>
        <SearchNav/>
        <div>
          {business.business_name}
        </div>
        <div>
          Menu
        </div>
        <div>
          Location & Hours
          <div>
            <span>{business.address}</span>
            <span>{business.city}</span>
            <span>{business.state}</span>
            <span>{business.zip}</span>
            <span>Get directions</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
