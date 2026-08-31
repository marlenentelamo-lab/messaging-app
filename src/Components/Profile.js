import { useEffect, useState } from "react";
import api from "../api";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await api.get("/session");
        setUser(data.user || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <section>
      <h1>Profile</h1>
      <p>User: {user.username}</p>
      <p>Name: {user.first_name || ""} {user.last_name || ""}</p>
    </section>
  );
}

export default Profile;
