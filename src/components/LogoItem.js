import React from 'react';

const logoItem = ({ items }) => (
  <div>
    {items.map((menuItem) => {
      const {
        id, title, img, content,
      } = menuItem;
      return (
        <article key={id}>
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <p>{content}</p>
            </header>
            <img src={img} alt={title} />
          </div>
        </article>
      );
    })}
  </div>
);

export default logoItem;
