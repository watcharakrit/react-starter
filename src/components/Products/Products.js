/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Home
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';

import Image from 'components/Image';
import styles from './Products.scss';

export default Products;

/**
 * --------------------------------------------------------
 * Stateless component
 * --------------------------------------------------------
 */
function Products(props) {
  const { id } = props.params;
  return (
    <section className={styles['home-page']}>
      <h1>Products Page "{id}"</h1>
    </section>
  );
}
