import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: 0,
      author_id: this.props.user.id,
      business_id: this.props.business.id
    }
  }



  render() {
    <>
      <div className="review-form-container">
        <div>
          <input type="text-area" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </>
  }
}

export default ReviewForm;