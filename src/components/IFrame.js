import React, { useState } from 'react';

export default function IFrame({ html, css, js }) {
  let srcDoc = `
<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
</html>
`;

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="auto"
      />
    </div>
  );
}
