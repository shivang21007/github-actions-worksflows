import { useEffect, useState } from 'react';
import './App.css';

interface User {
  name: string;
  age: number;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Shivang Gupta [DevSecOps Live Project]</h1>
        <p className="subtitle">(Built • Tested • Linted • Deployed via GitHub Actions by CI-CD Pipeline)</p>
        <p className="subtitle">(Deployement SHA: { import.meta.env.VITE_GITHUB_SHA })</p>
      </header>
      
      <main className="grid-container">
        {users.map((user, index) => (
          <div key={index} className="card">
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p className="email">{user.email}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
