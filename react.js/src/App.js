import { useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState('');
  const fetchServerData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    return data;
  } 
  fetchServerData('http://localhost:8000/api/')
  return (
    <>
      {data ? JSON.stringify(data) :'hi'}
    </>
  );
}

export default App;
