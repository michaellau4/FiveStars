import { connect } from "react-redux"
import { fetchReviews } from "../../actions/review_actions";
import { fetchUsers } from '../../actions/session_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = (state = {}, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex)