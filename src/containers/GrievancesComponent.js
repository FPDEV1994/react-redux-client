
// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as grievancesActions from '../actions/grievancesActions';
import GrievancesComponent from '../components/GrievancesComponent';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedGrievancesState: state.grievancesState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchGrievances: () => dispatch(grievancesActions.fetchGrievances()),
    setPage: (event, page) => dispatch(grievancesActions.setPage(event, page)),
    changeRowsPerPage: (page, rowsPerPage) => dispatch(grievancesActions.changeRowsPerPage(page, rowsPerPage))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GrievancesComponent);