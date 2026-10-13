import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/health')
      .then(response => response.json())
      .then(data => setStatus(data.status))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Proof App</h1>
      <p>{status}</p>
    </>
  )
}

export default App
