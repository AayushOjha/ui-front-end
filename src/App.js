import React from 'react';
import { useSelector } from 'react-redux';

export default function App() {
  const html = useSelector((state) => state.html);
  return (
    <div>
      <h1>{html}</h1>
    </div>
  );
}
