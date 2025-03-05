import { useState } from "react";
import axios from "axios";

export default function CreateUser({ onUserCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
      });
      setMessage("User created successfully: " + response.data.name);
      setName("");
      setEmail("");
      onUserCreated(); // Kutsutaan tätä funktiota onnistuneen käyttäjän luomisen jälkeen
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="card p-3 mb-3">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}