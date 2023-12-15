import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [admins, setAdmins] = useState([]);

  const getAdmins = async () => {
    const admins = await axios.get("/api/admins");
    console.log(admins);
    setAdmins(admins.data);
  };

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <>
      <h1>Data for admin</h1>
      {admins.length > 0 &&
        admins.map((admin) => (
          <div key={admin._id}>
            <h2>{admin.username}</h2>
            <p>{admin.password}</p>
          </div>
        ))}
    </>
  );
}

export default App;
