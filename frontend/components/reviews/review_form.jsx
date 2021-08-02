import React from 'react';
import SearchNav from '../search_nav_bar/search_nav_bar';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      rating: "1",
      author_id: this.props.user_id,
      business_id: this.props.business.id,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id)
      // .then(() => {this.setState({hasFetched: true})})
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.business !== this.props.business) {   
  //     this.props.fetchBusiness(this.props.business.id)
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.hasFetched) {
  //     return false;
  //   }
  //   return true;
  // }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review, this.props.business.business_id)
      .then(() => (this.props.history.push(`/businesses/${this.props.business.id}`)));
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
                    <input className="radio-rating" name="rating" type="radio" value="1" onChange={this.handleRating} checked={this.state.rating === "1"}/>
                  </label>
                  <label>Could've been better
                    <input className="radio-rating" name="rating" type="radio" value="2" onChange={this.handleRating} checked={this.state.rating === "2"}/>
                  </label>
                  <label>OK
                    <input className="radio-rating" name="rating" type="radio" value="3" onChange={this.handleRating} checked={this.state.rating === "3"}/>
                  </label>
                  <label>Good
                    <input className="radio-rating" name="rating" type="radio" value="4" onChange={this.handleRating} checked={this.state.rating === "4"}/>
                  </label>
                  <label>Great
                    <input className="radio-rating" name="rating" type="radio" value="5" onChange={this.handleRating} checked={this.state.rating === "5"}/>
                  </label>
                </div>
                <div className="review-content-container">
                  <textarea
                    className="review-content"
                    rows="5"
                    cols="80"
                    onChange={this.handleBody}
                    value={this.state.body}
                    placeholder="Lorem ipsum blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"/>
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

export default withRouter(ReviewForm);