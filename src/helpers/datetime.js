/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - request
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import moment from 'moment';


export const format = {
  DATE: 'DD MMMM YYYY',
  TIME: 'hh.mm A'
};


/**
 * Get current date string
 *
 * @return {string} current date string.
 */
export function getDateNow() {
  return moment().format(format.DATE);
}

/**
 * Get current date object
 *
 * @return {string} current date object.
 */
export function getDateNowObject() {
  const [date, month] = getDateNow().split(' ');
  return {
    date,
    month
  };
}

/**
 * Get current time string
 *
 * @return {string} current time string.
 */
export function getTimeNow() {
  return moment().format(format.TIME);
}

/**
 * Get current time object
 *
 * @return {string} current time object.
 */
export function getTimeNowObject() {
  const [time, periods] = getTimeNow().split(' ');
  return {
    time,
    periods
  };
}
