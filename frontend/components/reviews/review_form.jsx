import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: 0,
      author_id: this.props.user_id,
      hasFetched: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
      .then(() => {this.setState({hasFetched: true})})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.business !== this.props.business) {   
      this.props.fetchBusiness(this.props.business.id)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state)
    this.props.processForm(review, this.state.business_id);
  }

  handleBody(e) {
    this.setState({body: e.target.value})
  }

  handleRating(e) {
    this.setState({rating: e.target.value})
  }

  hoverRating(value) {
    this.setState({rating: value})
  }

  render() {
    if (!this.props.business) return null;
    return (
      <>
        <div className="review-nav-container">
          <SearchNav/>
        </div>
        <div className="review-form-container">
          <h3>{this.props.business.business_name}</h3>
          <div>
            <form onSubmit={this.handleSubmit} className="review-form-box">
              <div className="inner-content-container">
                <div>
                  <label>Not Good
                    <input name="rating" type="radio" value="1"/>
                  </label>
                  <label>Could've been better
                    <input name="rating" type="radio" value="2" />
                  </label>
                  <label>OK
                    <input name="rating" type="radio" value="3"/>
                  </label>
                  <label>Good
                    <input name="rating" type="radio" value="4"/>
                  </label>
                  <label>Great
                    <input name="rating" type="radio" value="5"/>
                  </label>
                </div>
                <div>
                  <input className="review-content" type="text-area" onChange={this.handleBody} value={this.state.body} placeholder="HAHAHAHAHAA"/>
                </div>
              </div>
              <button className="review-submit">
                Post Review
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewForm;