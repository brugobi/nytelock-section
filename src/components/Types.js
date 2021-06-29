/* eslint-disable */
import React from 'react';

const Types = ({ types, selectItem }) => {
  return (
    <div className="section has-background-dark">
      <div className="container">
        <div className="columns">
          <p>Different Types of Logo Style</p>
        </div>
        <div className="columns">
          {types.map((type, index) => {
            return (
              <div className="column">
                <button
                  type="button"
                  className="btn-Type"
                  key={index}
                  onClick={() => selectItem(type)}> {type}
                  <p>Logos</p>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Types;
