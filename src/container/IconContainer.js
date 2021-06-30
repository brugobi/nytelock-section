import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/fa';

const DynamicFaIcon = ({ icon }) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
};

DynamicFaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DynamicFaIcon;
