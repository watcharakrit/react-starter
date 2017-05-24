/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Core - root reducer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { createStore, combineReducers } from 'redux';

// third party
import { routerReducer } from 'react-router-redux';

// reducers
import modulePatientQueueReducer from 'modules/patientQueue';

export default combineReducers({
  routing:      routerReducer,
  patientQueue: modulePatientQueueReducer
});
