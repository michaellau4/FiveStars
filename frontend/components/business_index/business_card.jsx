import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

// const BusinessCard = (props) => {
//   let reviews = props.business.reviews();
//   return (
//     <div className="business-list-container">
//       <div className="business-list">
//         <div>
//           {/* {props.business.photoUrls.map((photoUrl, i) => (
//             <img key={i} src={photoUrl} key={i} alt="" />
//           ))} */}
//         </div>
//         <span className="title-container">
//           <h3>
//             {(props.id + 1)}.&nbsp; 
//           </h3>
//           <h3 className="business-list-name">
//             {props.business.business_name}
//           </h3>
//         </span>
//         <div>
//           {reviews}
//         </div>
//         <div className="business-list-tag-container">
//           {props.business.tags.map((tag) => (
//             <div className="business-list-tags" key={tag.id}>{tag.tag}</div>
//           ))}
//         </div>
//       </div>    
//     </div>
//   )
// };

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    let {business, id} = this.props;
    let totalReviews = business.reviews.length;
    let avgRating = 0;
    business.reviews.map(review => (
      avgRating += review.rating
    ));
    avgRating = avgRating / totalReviews;
    if (!business) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className="business-list-container">
        <div className="business-list">
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
            <div>
              <h3>
                {business.reviews.length}
              </h3>
            </div>
            <div className="business-list-tag-container">
              {business.tags.map((tag) => (
                <div className="business-list-tags" key={tag.id}>{tag.tag}</div>
              ))}
            </div>
          </div>
        </div>  
        </div>  
      )
    }
  }
}

export default BusinessCard;