import { useState, useEffect } from "react";
import axios from "axios";

export default function ReadUsers({ refresh }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (err) {
        setError("Error fetching users: " + (err.response?.data?.error || err.message));
      }
    };
    fetchUsers();
  }, [refresh]);

  return (
    <div className="card p-3">
      <h2>Users List</h2>
      {error && <p>{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}