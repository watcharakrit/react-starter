/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Home
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';

import Image from 'components/Image';
import styles from './Home.scss';

export default Home;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Home(props) {
  return (
    <section className={styles['home-page']}>
      <h1>Saneha</h1>
    </section>
  );
}
