/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';
import Header from './Header.js';

export default connect(mapStateToProps)(Header);

function mapStateToProps(state) {
  const { test } = state.patientQueue;

  return {
    test
  };
}
