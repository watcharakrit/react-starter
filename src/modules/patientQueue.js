/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Moduel - patient queue
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import { log } from 'helpers/util';

/**
 * --------------------------------------------------------
 * Initialize state
 * --------------------------------------------------------
 */
export const initialState = {
  status: 'INITIAL',
  error:  null,
  queue:  [],
  isFirstFetch: true,
  isPlayAlertSound: true,
  test: 'Saneha'
};

/**
 * --------------------------------------------------------
 * Constant
 * --------------------------------------------------------
 */
export const constants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};


/**
 * --------------------------------------------------------
 * Action types
 * --------------------------------------------------------
 */
export const actionTypes = {
  RESET_STATUS     : 'patientQueue/RESET_STATUS',
  LOADING          : 'patientQueue/LOADING',
  SUCCESS          : 'patientQueue/SUCCESS',
  FAILURE          : 'patientQueue/FAILURE',
  PLAY_ALERT_SOUND : 'patientQueue/PLAY_ALERT_SOUND',
  STOP_ALERT_SOUND : 'patientQueue/STOP_ALERT_SOUND'
};


/**
 * --------------------------------------------------------
 * Reducer
 * --------------------------------------------------------
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.RESET_STATUS:
      return {
        ...state,
        status: constants.INITIAL
      };

    case actionTypes.LOADING:
      return {
        ...state,
        status: constants.LOADING,
        error: null
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        status: constants.SUCCESS,
        error: null,
        queue: action.queue,
        isFirstFetch: false
      };

    case actionTypes.FAILURE:
      return {
        ...state,
        status: constants.FAILURE,
        queue: [],
        error: action.error
      };

    case actionTypes.PLAY_ALERT_SOUND:
      return {
        ...state,
        isPlayAlertSound: true
      };

    case actionTypes.STOP_ALERT_SOUND:
      return {
        ...state,
        isPlayAlertSound: false
      };

    default:
      return state;
  }
}


/**
 * --------------------------------------------------------
 * Action creators
 * --------------------------------------------------------
 */
export const actionCreators = {
  doPatientQueueResetStatus,
  doRequestPatientQueue,
  doPatientQueueToLoading,
  doPatientQueueToSuccess,
  doPatientQueueToFailure,
  doPatientQueuePlayAlertSound,
  doPatientQueueStopAlertSound
};

/**
 * Reset status
 */
export function doPatientQueueResetStatus() {
  return {
    type: actionTypes.RESET_STATUS
  };
}

/**
 * Request patient queue data from API
 */
export function doRequestPatientQueue() {

  return (dispatch) => {
    dispatch(doPatientQueueToLoading());

    return requestFromApi('GET', 'backend/doctorroom')
      .then((resp) => {
        log.reducer('Queue', resp.rooms.length);
        dispatch(doPatientQueueToSuccess(resp.rooms));
      })
      .catch((error) => {
        log.error(error.response);
        dispatch(doPatientQueueToFailure(error.response));
      });
  };
}

/**
 * Set status to `loading`.
 */
export function doPatientQueueToLoading() {
  return {
    type: actionTypes.LOADING
  };
}

/**
 * Set status to `success`.
 *
 * @param {string} profile - patient queue data.
 */
export function doPatientQueueToSuccess(queue) {
  return {
    type: actionTypes.SUCCESS,
    queue
  };
}

/**
 * Set status to `failure`.
 */
export function doPatientQueueToFailure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

/**
 * Play Alert Sound
 */
export function doPatientQueuePlayAlertSound() {
  return {
    type: actionTypes.PLAY_ALERT_SOUND
  };
}
/**
 * Stop Alert Sound
 */
export function doPatientQueueStopAlertSound() {
  return {
    type: actionTypes.STOP_ALERT_SOUND
  };
}
