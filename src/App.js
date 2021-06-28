/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import items from './data/data';
import Types from './components/Types';
import LogoItem from './components/LogoItem';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section>
        <div>
          <h2>our Logos</h2>
        </div>
        <Types />
        <LogoItem items={menuItems} />
      </section>
    </main>
  );
}

export default App;
