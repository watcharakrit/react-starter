/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Icon
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */

import React, { PropTypes } from 'react';
import { prefixNameIcons } from 'core/config';
import classNames from 'classnames';

export default Icon;

/**
 * Prop types
 * --------------------------------------------------------
 */
Icon.propTypes = {
  name: PropTypes.string.isRequired
};

function Icon({ name, className, ...props }) {
  const icon = classNames(`${prefixNameIcons}${name}`, {
    [className]: className
  });
  return <i {...props} className={icon}></i>
}
