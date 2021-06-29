import React, { useState } from 'react';
import './App.css';
import items from './data/data';
import Types from './components/Types';
import LogoItem from './components/LogoItem';

const allTypes = [...new Set(items.map((item) => item.type))];

function App() {
  const [menuItems, setMenuItems] = useState([items[0]]);
  const [types] = useState(allTypes);

  const selectItem = (type) => {
    const newItems = items.filter((item) => item.type === type);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <Types types={types} selectItem={selectItem} />
        <LogoItem items={menuItems} />
      </section>
    </main>
  );
}

export default App;
