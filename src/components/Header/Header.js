/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { IndexLink, Link } from 'react-router';

import styles from './Header.scss';

export default Header;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Header(props) {
  const { test } = props;

  return (
    <header className={styles.header}>
      <div>Header {test}</div>
      <p className={styles.nav}>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="about" activeClassName="active">About</Link>
      </p>
    </header>
  );
}
