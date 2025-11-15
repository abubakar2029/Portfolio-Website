"use client";

import * as React from "react";

export default function NumberButton() {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
    >
      {count}
    </button>
  );
}
