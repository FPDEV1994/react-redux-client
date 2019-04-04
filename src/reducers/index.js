import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { grievancesReducer } from './grievancesReducer';

export default combineReducers({

    grievancesState: grievancesReducer,
    routing
});