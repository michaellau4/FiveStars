import { connect } from "react-redux";
import { fetchBusinesses } from "../../actions/business_actions";
import Index from './index';

const mapStateToProps = (state = {}) => ({
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)