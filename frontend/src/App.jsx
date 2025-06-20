import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:30080/events')
        .then(res => setEvents(res.data))
        .catch(err => console.error(err));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Live User Eventsss</h1>
      <ul>
        {events.map((e, i) => (
          <li key={i}>{e.timestamp} - User {e.userId} did {e.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
