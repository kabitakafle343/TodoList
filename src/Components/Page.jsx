// Page.jsx

import React, { useState } from 'react';
import todo from '../Image/todo.webp';
import "./Page.css";

const getLocalStorageData=()=>{
 return  JSON.parse(localStorage.getItem('list'));
}

const Page = () => {
  const [input, setinput] = useState('');
  const [item, setitem] = useState(getLocalStorageData());

  const handleClick = () => {
    if (!input) {
      alert('Please enter');
    } else {
      setitem([...item, input]);
      setinput('');
    }
  }

  const handleDelete = (id) => {
    const checkk = item.filter((item, ind) => {
      return id !== ind;
    });
    setitem(checkk);
  }

  const removeAll = () => {
    setitem([]);
  }

 localStorage.setItem('list', JSON.stringify(item));

  return (
    <div className='container'>
      <h1>TodoList</h1>
      <img src={todo} id="topImage" alt="Todo" />
      <div className="input-container">
        <input
          type='text'
          placeholder='enter'
          value={input}
          className='input'
          onChange={(e) => setinput(e.target.value)}
        />
        <i className="fa-sharp fa-light fa-plus" onClick={() => handleClick()}></i>
      </div>

      <div>
        {
          item.map((ele, ind) => (
            <div key={ind} className='divyellow'>
              <p>{ele}</p>
              <i className="fa-sharp fa-solid fa-trash" onClick={() => handleDelete(ind)}></i>
            </div>
          ))
        }
      </div>

      <button className='btn' onClick={() => removeAll()}>remove all</button>
    </div>
  );
}

export default Page;

