import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('books');

  const handleAdd = () => {
    setData([...data, { id, price, product, category }]);
    // Clear input fields after adding data
    setId('');
    setPrice('');
    setProduct('');
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const categories = ['books', 'electronics', 'vehicles'];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label>ID: </label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Price: </label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Product: </label>
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </div>
      <div>
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAdd}>Add Product</button>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat.charAt(0).toUpperCase() + cat.slice(1)} Products</h2>
          <ul>
            {data
              .filter((item) => item.category === cat)
              .map((item, index) => (
                <li key={index}>
                  <strong>ID:</strong> {item.id}, <strong>Price:</strong> {item.price},{' '}
                  <strong>Product:</strong> {item.product}, <strong>Category:</strong> {item.category}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;

