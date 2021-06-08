import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';

class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFetched: false
    }
    console.log(this.props);
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
      <div className="page-container">
        <SearchNav/>
        <div className="business-info-container">
          <div className="business-photo-container">
            {business.photoUrls.map((photoUrl, i) => (
              <img src={photoUrl} key={i} alt="" />
            ))
            }
            <div className="photo-header-content">
              <div className="business-title">
                {business.business_name}
              </div>
            </div>
          </div>
          <div>
            
          </div>
          <div className="tags">

          </div>
          <div>
            Order Food

          </div>
          <div>
            <div>
              <div>
                {business.website_url}
              </div>
              <div>
                <span>Get Directions</span>
                <span>{business.address}{business.city}{business.state}{business.zip}</span>
              </div>
            </div>
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
        <div className="reviews">

        </div>
        <div className="main-footer-container">
          <div className="main-footer">
            <div className="footer-content-container">

            </div>
            <footer className="footer-background">
              <h3>bottom</h3>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
