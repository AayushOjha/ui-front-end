import React, { useState, useEffect } from 'react';
import classes from './cssFiles/PreviewSec.module.css';
import data from '../jsons/settingComponents.json';
import { useSelector } from 'react-redux';

export default function PreviewSec() {
  // const [html, sethtml] = useState(``);
  const html = useSelector((state) => state.html);
  const [css, setcss] = useState(`body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .topnav a.active {
    background-color: #04AA6D;
    color: white;
  }`);
  const [js, setjs] = useState('');

  const elementData = data.components;
  const numOfComponents = data.components.length;

  // const loadHtml = () => {
  //   let html = '';
  //   for (let i = 0; i < numOfComponents; i++) {
  //     html = html + elementData[i].elements[0].html;
  //   }
  //   return html;
  // };
  const loadCss = () => {
    let css = '';
    for (let i = 0; i < numOfComponents; i++) {
      css = css + elementData[i].elements[0].css;
    }
    return css;
  };

  useEffect(() => {
    // sethtml(loadHtml());
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
        <h1 className={`${classes.brandName} rounded-10`}>UI Lab</h1>
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
