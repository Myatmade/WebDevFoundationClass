import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log("Fetched JSON:", json);
        setData(json);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>JSON Fetch Test</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
}
