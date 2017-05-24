/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';

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
    </header>
  );
}
