import React from 'react';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchReviews(this.props.business.id)
  }

  render() {
    let {reviews} = this.props
    return (
      <>
        <div className="reviews-wrapper">
          {reviews.map((review) => (
            <div className="reviews-container">
              
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default ReviewsIndex;