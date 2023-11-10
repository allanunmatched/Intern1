import React from 'react';
import './App.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Espresso', price: '$2.50' },
    { id: 2, name: 'Latte', price: '$3.50' },
    { id: 3, name: 'Cappuccino', price: '$3.00' },
    { id: 4, name: 'Americano', price: '$2.75' },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: info@coffeeshop.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee Shop</h1>
      </header>
      <main>
        <Menu />
        <Contact />
      </main>
    </div>
  );
};

export default App;
