/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container - Layout/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import { connect } from 'react-redux';
import Layout from './Layout.js';

export default connect(mapStateToProps)(Layout);

function mapStateToProps(state) {
  const { queue } = state.patientQueue;

  return {
    queue
  };
}
