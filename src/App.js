import './App.css';
import { useState, useRef } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const inputEl = useRef(null);

  const handleClick = () => {
    if (value !== "") {
    setData(prev => [...prev, value]);
    setValue('');
    inputEl.current.focus();
    }
  }

  const handleRemoveItem = (item) => {
    setData(prevData => prevData.filter(listValue => item !== listValue));
}

  return ( 
    <div className="App">
      <header className="App-header">
        <div>
          <input ref={inputEl} type="text" value={value} onChange={event => setValue(event.target.value)} ></input>
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          <ul>
            {
              data.map((item, index) => (
              <TodoItem key={index}>
                <span>{item}</span>
                <button onClick={() => handleRemoveItem(item)}>X</button>
              </TodoItem>
              ))
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
