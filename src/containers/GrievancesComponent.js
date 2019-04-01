
// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as userInformationActions from '../actions/userInformationActions';
import GrievancesComponent from '../components/GrievancesComponent';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedUserInformationState: state.userInformationState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchUserInformation: () => dispatch(userInformationActions.fetchUserInformation())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GrievancesComponent);