import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId],
  user: state.entities.users[state.session.id],
  user_id: state.session.id
});

const mapDispatchToProps = dispatch => ({
  processForm: (review, businessId) => dispatch(createReview(review, businessId)),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);