import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
import Splash from './splash';

const mapStateToProps = (state = {}) => ({
  currentUser: state.entities.users[state.session.id],
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);