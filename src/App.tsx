import React, { useEffect } from 'react';
import './App.css';
import { getQuestion } from './container';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      let data = await getQuestion(5, "easy");
      console.log(data);
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
