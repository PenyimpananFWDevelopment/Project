import React, { useState } from 'react';
import TvMazeDataList from './TvMazeDataList';
import './App.css';
const App = () => {
  const [tvMazeData, setTvMazeData] = useState('82');

  return (
    <div>
      <div className='App'>
        <button className='btn styleTop' onClick={ () => setTvMazeData('82')}> Game of Thrones </button>
        <button className='btn styleBottom' onClick={ () => setTvMazeData('431')}> Friends </button>
        <button className='btn styleTop' onClick={ () => setTvMazeData('169')}> Breaking Bad </button>
        <button className='btn styleBottom' onClick={ () => setTvMazeData('143')}> Silicon Valley </button>
        <button className='btn styleTop' onClick={ () => setTvMazeData('187')}> Mr Robot </button>
      </div>
      < TvMazeDataList tvMazeData={tvMazeData} />
    </div>
  );
};

export default App;