import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';
import { GoLinkExternal } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiDirectionLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import ReviewIndexContainer from '../reviews/reviews_index_container';

class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFetched: false
    }
    console.log(this.props);
    this.goToReview = this.goToReview.bind(this);
  }

  goToReview() {
    this.props.history.push(`/businesses/${this.props.business.id}/createReview`);
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
          <div className="business-info-content">
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
          </div>
          <div className="tags">

          </div>
        </div>
        <div className="mid-section-wrapper">

          <div className="mid-section-container">
            <div className="right-sidebar">
              <div className="order-food-box">
                <h3>Order Food</h3>

              </div>
              <div className="extra-info-box">
                <div className="website-url">
                  <span>{business.website_url}</span>
                  <GoLinkExternal/>
                </div>
                <div className="phone-number">
                  <span>{business.phone_number}</span>
                  <FiPhoneCall/>
                </div>
                <div className="directions">
                  <div>
                    <span>Get Directions</span>
                    <span className="address">{business.address}{business.city}{business.state}{business.zip}</span>
                  </div>
                  <RiDirectionLine/>
                </div>
                <div className="message">
                  <span>Message the Business</span>
                  <BiMessageDots/>
                </div>
              </div>
            </div>
            <div className="mid-section-main-content">
              <div className="review-button-container">
                <button className="review-button" onClick={() => this.goToReview()}><AiOutlineStar className="star-button"/>&nbsp;Write a Review</button>
              </div>
              <div className="locations-box">
                <h3>Location & Hours</h3>
                <div>
                  <span>{business.address}</span>
                  <span>{business.city}</span>
                  <span>{business.state}</span>
                  <span>{business.zip}</span>
                  <span>Get directions</span>
                </div>
              </div>
              <div className="reviews">
                <h3 className="reviews-title">Recommended Reviews</h3>
                <ReviewIndexContainer business={business}/>
              </div>
            </div>
          </div>
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
