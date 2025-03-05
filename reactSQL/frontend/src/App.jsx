import { useState } from "react";
import CreateUser from "./components/CreateUser.jsx";
import ReadUsers from "./components/ReadUsers.jsx";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleUserCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container mt-5">
      <CreateUser onUserCreated={handleUserCreated} />
      <ReadUsers refresh={refresh} />
    </div>
  );
}

export default App;