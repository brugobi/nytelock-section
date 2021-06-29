/* eslint-disable */
import React from 'react';
import * as Icons from 'react-icons/fa';

const DynamicFaIcon = ({ icon }) => {
  const IconComponent = Icons[icon];


  if (!IconComponent) {
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
};

export default DynamicFaIcon;
