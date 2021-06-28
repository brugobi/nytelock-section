/* eslint-disable */
import React from 'react';

const Types = ({ types, selectItem }) => {
  return (
    <div>
      {types.map((type, index) => {
        return (
          <button
            type="button"
            className="btn-Type"
            key={index}
            onClick={() => selectItem(type)}> {type}
          </button>
        )
      })}
    </div>
  );
};

export default Types;
