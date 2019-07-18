import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import ListPost from './components/ListPost';

function App() {
  return (
    <div className="App">
      <Post/>
      <br/>
      <ListPost/>
    </div>
  );
}

export default App;
