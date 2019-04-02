import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import { userInformationReducer } from './userInformationReducer';
import { grievancesReducer } from './grievancesReducer';

export default combineReducers({
    appState: appReducer,
    userInformationState: userInformationReducer,
    grievancesState: grievancesReducer,
    routing
});