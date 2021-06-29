import React from 'react';

const logoItem = ({ items }) => (
  <div>
    {items.map((menuItem) => {
      const {
        id, title, img, content,
      } = menuItem;
      return (
        <article key={id}>
          <div className="container">
            <div className="columns">
              <div className="column">
                <header>
                  <h1 className="title-customized">{title}</h1>
                  <p>{ content }</p>
                </header>
              </div>
              <div className="column">
                <div className="notification is-white is-centered">
                  <figure className="image">
                    <img src={img} alt={title} style={{ maxWidth: '400px' }} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

export default logoItem;
