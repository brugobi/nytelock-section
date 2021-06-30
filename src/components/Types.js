/* eslint-disable */
import React from 'react';
import items from '../data/data';
import IconComponent from './IconComponent';
import { AiOutlineArrowRight } from "react-icons/ai";

const Types = ({ types, selectItem }) => {
  
  return (
    <div className="section color-gray">
      <div className="container">
        <div className="columns header-type-container">
          <div className="header-type">
            <h1>how do I know which logo style is right for me?</h1>
            <div className="btn-contact-container">
              <div>
                <p className="p-caps">Different Types of Logo Style</p>
              </div>
              <div className="btn-contact">
                <button className="p-caps">contact us <span className="contact-icon"><AiOutlineArrowRight /></span></button>
              </div>
            </div>
          </div>
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
