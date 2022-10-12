import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [topicInput, setTopicInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topicInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setTopicInput("");
  }

  return (
    <div>
      <Head>
        <title>Newsroom post idea generator</title>
        <link rel="icon" href="/llama.svg" />
      </Head>

      <main className={styles.main}>
        <img src="/llama.svg" className={styles.icon} />
        <h2>Newsroom post idea generator</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="topic"
            placeholder="Enter a topic"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
          />
          <input type="submit" value="Generate results" />
        </form>
        <body>
        <div className={styles.result}>{result}</div></body>
      </main>
    </div>
  );
}
