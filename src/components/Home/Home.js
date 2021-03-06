/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Home
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';

import Image from 'components/Image';
import styles from './Home.scss';

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className={styles['home-page']}>
        <h1>Home Page</h1>
      </section>
    );
  }
}
