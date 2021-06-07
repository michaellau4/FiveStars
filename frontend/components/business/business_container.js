import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import Business from './business';

const mapStateToProps = (state = {}, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId]
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Business);