import logo from './logo.svg';
import { useState } from 'react';
import Search from './Search';
import Result from './Result';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Result searchTerm={searchTerm} />
    </div>
  );
}

export default App;
