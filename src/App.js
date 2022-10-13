import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState } from 'react';

function App() {

    const [items, setItems] = useState(
      [{
          id: 1,
          checked: false,
          item: "item 1"
      },
      {
          id: 2,
          checked: true,
          item: "item 2"
      },
      {
          id: 3,
          checked: false,
          item: "item 3"
      }]
  );

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setItems(listItems);
      localStorage.setItem('Shoppinlist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem("Shoppinglist", JSON.stringify(listItems));
  }


  return (
    <div className="App">
        <Header title="Groceries"/>
        <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length}/>
    </div>
  );
}

export default App;
