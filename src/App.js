/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import items from './data/data';
import Types from './components/Types';
import LogoItem from './components/LogoItem';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const selectItem = (type) => {
    const newItems = items.filter((item) => item.type === type);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div>
          <h2>our Logos</h2>
        </div>
        <Types selectItem={selectItem} />
        <LogoItem items={menuItems} />
      </section>
    </main>
  );
}

export default App;
