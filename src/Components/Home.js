import { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await api.get("/messages");
        setMessages(data.messages || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  return (
    <section>
      <h1>Home</h1>
      {loading && <p>Loading messages...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!loading && !error && messages.length === 0 && <p>No messages yet.</p>}
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.title}</strong>
            <p>{message.text}</p>
            <small>
              {message.first_name || "Unknown"} {message.last_name || ""} · {message.username}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
