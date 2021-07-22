import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';
import { GoLinkExternal } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiDirectionLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import ReviewIndexContainer from '../reviews/reviews_index_container';
import {withRouter} from 'react-router-dom';
import StaticBusinessMap from '../maps/maps_static';

class Business extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFetched: false
    }
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
    let {business} = this.props;
    if (!business) return null;
    let totalReviews = business.reviews.length;
    let avgRating = 0
    business.reviews.map(review => (
      avgRating += review.rating
    ));
    avgRating = avgRating / totalReviews;
    let styleStars = {
      width: "176px",
      height: "32px",
      display: "inlineBlock",
      verticalAlign: "middle",
      background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
      backgroundPosition: "0 -288px",
    }
    if (avgRating > 4.9) {

    } else if (avgRating < 4.9 && avgRating >= 4.5) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -224px",
      }
      
    } else if (avgRating < 4.5 && avgRating >= 4) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -256px",
      }
        
    } else if (avgRating < 4 && avgRating >= 3.5) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -160px",
      }
      
    } else if (avgRating < 3.5 && avgRating >= 3) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -192px"
      }
      
    } else if (avgRating < 3 && avgRating >= 2.5) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -96px",
      }
    
    } else if (avgRating < 2.5 && avgRating >= 2) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -128px",
      }
    } else if (avgRating < 2 && avgRating >= 1.5) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -32px",
      }
    } else if (avgRating < 1.5 && avgRating >= 1) {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -64px",
      }
    } else {
        styleStars = {
        width: "176px",
        height: "32px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 0px",
      }
    }
    let stars = <div style={styleStars}></div>
    return (
      <div className="page-container">
        <SearchNav/>
        <div className="business-info-container">
          <div className="business-info-content">
            <div className="business-photo-container">
              {business.photoUrls.map((photoUrl, i) => (
                <img key={i} src={photoUrl} key={i} alt="" />
              ))
              }
              <div className="photo-header-content">
                <div className="business-title">
                  {business.business_name}
                </div>
                <div className="rating-info-container">
                  {stars}
                  <div className="rating-info">{totalReviews}&nbsp;reviews</div>
                </div>
                <div className="tag-container">
                  {business.tags.map((tag) => (
                    <div className="business-tags" key={tag.id}>{tag.tag}</div>
                  ))}
                </div>
              </div>
            </div>
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
                    <span className="address">
                      <span className="business-address">
                        {business.address}
                      </span>
                      <span className="business-city">
                        {business.city}
                      </span>
                      <span className="business-state">
                        {business.state}
                      </span>
                      <span className="business-zip">
                        {business.zip}
                      </span>
                    </span>
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
                <StaticBusinessMap business={business}/>
                <h3>Location & Hours</h3>
                <span className="address">
                  <span className="business-address">
                    {business.address}
                  </span>
                  <span className="business-city">
                    {business.city}
                  </span>
                  <span className="business-state">
                    {business.state}
                  </span>
                  <span className="business-zip">
                    {business.zip}
                  </span>
                </span>
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
              
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Business);
