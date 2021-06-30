import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import items from '../data/data';
import IconComponent from './IconComponent';

const Types = ({ types, selectItem }) => (
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
              <button className="p-caps" type="button">
                contact us
                <span className="contact-icon"><AiOutlineArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        {types.map((type) => (
          <div className="column btn-container" key={type}>
            <div className="btn-div">
              <button
                className="btn-logo"
                type="button"
                key={type}
                onClick={() => selectItem(type)}
              >
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
        ))}
      </div>
    </div>
  </div>
);

Types.propTypes = {
  types: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default Types;
