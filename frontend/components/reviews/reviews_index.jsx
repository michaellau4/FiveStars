import React from 'react';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFetched: false
    }
    console.log(this.props)
  }
  
  componentDidMount() {
    this.props.fetchReviews(this.props.business.id)
      .then(() => {this.setState({hasFetched: true})})
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.props.fetchReviews(this.props.business.id)
    }
  }

  shouldComponentUpdate() {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  render() {
    let {reviews} = this.props
    return (
      <>
        <div className="reviews-wrapper">
          {reviews.map((review) => {
            let date = review.created_at.slice(0,10);
            return (
              <div className="reviews-container">
                <div className="review-user-info">
                  {review.author.first_name}
                </div>
                <div className="rating-container">
                  {review.rating}
                  <div className="date">{date}</div>
                </div>
                <div className="review-body">
                  {review.body}
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default ReviewsIndex;