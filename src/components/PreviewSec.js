import React, { useState, useEffect } from 'react';
import classes from './cssFiles/PreviewSec.module.css';
import data from '../jsons/settingComponents.json';

export default function PreviewSec() {
  const [html, sethtml] = useState(``);
  const [css, setcss] = useState(``);
  const [js, setjs] = useState('');

  const elementData = data.components;
  const numOfComponents = data.components.length;

  const loadHtml = () => {
    let html = '';
    for (let i = 0; i < numOfComponents; i++) {
      html = html + elementData[i].elements[0].html;
    }
    return html;
  };
  const loadCss = () => {
    let css = '';
    for (let i = 0; i < numOfComponents; i++) {
      css = css + elementData[i].elements[0].css;
    }
    return css;
  };

  useEffect(() => {
    sethtml(loadHtml());
    setcss(loadCss());
  }, []);

  let srcDoc = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `;
  return (
    <div className={classes.container}>
      <div className={`${classes.header} rounded-10`}>
        <h1 className={`${classes.brandName} rounded-10`}>UI Library</h1>
      </div>
      <div className={`${classes.previewBox} rounded-10`}>
        <iframe
          srcDoc={srcDoc}
          title="priview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      <div className={`${classes.foot} rounded-10`}></div>
    </div>
  );
}
