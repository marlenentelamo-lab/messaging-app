import { useEffect, useState } from "react";
import api from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await api.get("/users");
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <section>
      <h1>Users</h1>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name || "Unknown"} {user.last_name || ""} ({user.username})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Users;
