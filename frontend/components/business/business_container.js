import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import Business from './business';

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.business[ownProps.match.params.businessId]
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: business => dispatch(fetchBusiness(business))
});

export default connect(mapStateToProps, mapDispatchToProps)(Business);