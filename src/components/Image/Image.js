/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Image
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';

import { baseImagePath } from 'core/config';


export default Image;

/**
 * Prop types
 * --------------------------------------------------------
 */
Image.propTypes = {
  src: PropTypes.string.isRequired
};

function Image({ src, ...props }) {
  const path = `${baseImagePath}/${src}`;
  return <img src={path} {...props} />
}
