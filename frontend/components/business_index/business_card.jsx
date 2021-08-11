import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {withRouter} from 'react-router-dom';

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.goToBusinessPage = this.goToBusinessPage.bind(this);
  }

  goToBusinessPage() {
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }

  render() {
    let {business, id} = this.props;
    let totalReviews = business.reviews.length;
    let avgRating = 0;
    business.reviews.map(review => (
      avgRating += review.rating
    ));
    avgRating = avgRating / totalReviews;
    let styleStars = {
      width: "108px",
      height: "20px",
      display: "inlineBlock",
      verticalAlign: "middle",
      background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
      backgroundPosition: "0 -500px",
    }
    if (avgRating > 4.9) {

    } else if (avgRating < 4.9 && avgRating >= 4.5) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -460px",
      }
      
    } else if (avgRating < 4.5 && avgRating >= 4) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -480px",
      }
        
    } else if (avgRating < 4 && avgRating >= 3.5) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -420px",
      }
      
    } else if (avgRating < 3.5 && avgRating >= 3) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -440px"
      }
      
    } else if (avgRating < 3 && avgRating >= 2.5) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -380px",
      }
    
    } else if (avgRating < 2.5 && avgRating >= 2) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -400px",
      }
    } else if (avgRating < 2 && avgRating >= 1.5) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -340px",
      }
    } else if (avgRating < 1.5 && avgRating >= 1) {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -360px",
      }
    } else {
        styleStars = {
        width: "108px",
        height: "20px",
        display: "inlineBlock",
        verticalAlign: "middle",
        background: 'url("https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png")',
        backgroundPosition: "0 -320px",
      }
    }
    let stars = <div style={styleStars}></div>
    if (!business) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className="business-list-container">
          <div className="business-list" onClick={() => this.goToBusinessPage()}>
            <div className="image-container">
              
              <div className="image-carousel-container">
                <img className="business-images" src={business.photoUrls[0]} alt="" />
              </div>
                
            </div>
            <div className="business-info-container">
              <span className="title-container">
                <h3>
                  {(id + 1)}.&nbsp; 
                </h3>
                <h3 className="business-list-name">
                  {business.business_name}
                </h3>
              </span>
              <div className="business-info">
                <h3>{business.phone_number}</h3>
                <h3>{business.address}</h3>
                <h3>{business.city}</h3>
              </div>
              <div>
                <span className="business-card-rating">
                  <p className="business-card-stars">{stars}</p>
                  <p className="business-card-reviews">{business.reviews.length}</p>
                </span>
              </div>
              <div className="business-list-tag-container">
                {business.tags.map((tag) => (
                  <div className="business-list-tags" key={tag.id}>{tag.tag}</div>
                ))}
              </div>
              <div>
                {/* {(!business.reviews[0]) ? <p>{business.reviews[0].body}</p> : null} */}
              </div>
            </div>
          </div>  
        </div>  
      )
    }
  }
}

export default withRouter(BusinessCard);