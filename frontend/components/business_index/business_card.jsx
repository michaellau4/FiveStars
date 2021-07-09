import React from 'react';

const BusinessCard = (props) => {
  // let totalReviews = props.business.reviews.length;
  // let avgRating = 0
  // props.business.reviews.map(review => (
  //   avgRating += review.rating
  // ));
  // avgRating = avgRating / totalReviews;
  return (
    <div className="business-list-container">
      <div className="business-list">
        <span className="title-container">
          <h3>
            {(props.id + 1)}.&nbsp; 
          </h3>
          <h3 className="business-list-name">
            {props.business.business_name}
          </h3>
        </span>
        <div className="business-list-tag-container">
          {props.business.tags.map((tag) => (
            <div className="business-list-tags" key={tag.id}>{tag.tag}</div>
          ))}
        </div>
      </div>    
    </div>
  )
};

// class BusinessCard extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let business, id = this.props;
//     let totalReviews = business.reviews.length;
//     let avgRating = 0
//     props.business.reviews.map(review => (
//       avgRating += review.rating
//     ));
//     avgRating = avgRating / totalReviews;
//     return (
//       <div className="business-card-container">
//         <div className="business-card">
//           <h3>
//             {(id + 1)}. {business.business_name}
//           </h3>
//           <div>{avgRating}</div>
//           <div>
//             {business.tags.map((tag) => (
//               <div key={tag.id}>{tag.tag}</div>
//             ))}
//           </div>
//         </div>    
//       </div>
//     )
//   }
// }

export default BusinessCard;