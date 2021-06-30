import React, { useState } from 'react';
import './App.css';
import items from './data/data';
import TypesContainer from './container/TypesContainer';
import LogoItemComponent from './components/LogoItemComponent';

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
        <div>
          <TypesContainer types={types} selectItem={selectItem} />
        </div>
        <div>
          <LogoItemComponent items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
