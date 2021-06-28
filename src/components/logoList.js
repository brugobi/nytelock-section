import React, { useState } from 'react';
import data from '../data/data.js';

function LogoList() {
  return (
    <div>
      {data.map((logoDetail) => <h1 key={logoDetail.id}>{logoDetail.title}</h1>)}
    </div>
  );
};

export default LogoList;
