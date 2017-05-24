/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Helper - Utility
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import moment from 'moment';
import { isDebug, debugScopes } from 'core/config';


/**
 * Log wrapper function
 */
function initialDebug(isDebug, debugScopes) {
  const log = {};
  debugScopes.forEach(function(val, i) {
    log[val.name] = isDebug && val.enable ? console.log.bind(this, `%c SDN Debug: ${val.name} `, `background: ${val.bg}; color:${val.color}`) : function() {};
  });
  return log;
}
export const log = initialDebug(isDebug, debugScopes);




/**
 * Calculate age from birthday
 *
 * @param  {string} birthday - birthday (YYYY-MM-DD)
 *
 * @return {number} age.
 */
export function calculateAge(birthday) {
  const birthYear = parseInt(birthday.split(' ')[0], 10);
  const age = moment().format('YYYY') - birthYear;

  return age;
}


/**
 * Create time string by second.
 *
 * @param {number} counter - second counter.
 *
 * @return {string} time string.
 */
export function timeTextBySecond(counter) {
  let min = parseInt(counter / 60, 10).toString();
  let second = (counter % 60).toString();

  if (min.length === 1) {
    min = `0${min}`;
  }
  if (second.length === 1) {
    second = `0${second}`;
  }

  return `${min}:${second}`;
}


/**
 * Number with Commna
 */
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


/**
 * Genereate Unique ID
 */
export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
