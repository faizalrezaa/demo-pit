"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Client Component Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </main>
  );
}
