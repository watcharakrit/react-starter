/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Home
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';

import Image from 'components/Image';
import styles from './About.scss';

export default About;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function About(props) {
  return (
    <section className={styles['home-page']}>
      <h1>About Page</h1>
    </section>
  );
}
