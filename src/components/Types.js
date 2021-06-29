/* eslint-disable */
import React from 'react';
import items from '../data/data';
import IconComponent from './IconComponent';

const Types = ({ types, selectItem }) => {
  
  return (
    <div className="section color-gray">
      <div className="container">
        <div className="columns">
          <p>Different Types of Logo Style</p>
        </div>
        <div className="columns">
          {types.map((type, index) => {
            return (
              <div className="column btn-container">
                <div className="btn-div">
                  <button
                  className="btn-logo"
                  type="button"
                  key={index}
                  onClick={() => selectItem(type)}>
                    <div className="icon">
                      <IconComponent icon={items.find((item) => item.type === type).icon} />
                    </div>
                      <div className="btn-link">
                        <p className="p-caps">{type}</p>
                        <p className="p-caps">Logos</p>
                    </div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Types;
