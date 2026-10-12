import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3001/health')
      .then(data => setData(data.status))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Proof App</h1>
      <p>{data}</p>
    </>
  )
}

export default App
