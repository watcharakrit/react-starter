/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Container - Layout
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React from 'react';
import { Link } from 'react-router';

import styles from './Layout.scss';

import {
  Header
} from 'components';

/**
 * --------------------------------------------------------
 * Statelesss component create layout
 * --------------------------------------------------------
 */
export default function Layout(props) {
  const { children } = props;
  return (
    <div className={styles['see-doctor-now']}>
      <Header />
      <div className={styles['content']}>{ children }</div>
    </div>
  );
}
