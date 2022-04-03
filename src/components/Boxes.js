import React from 'react';
import Grid from '@mui/material/Grid';
import '../cssFiles/Boxes.css';
import IFrames from './IFrame';

export default function Boxes(props) {
  const temp = props.data[0];
  const componentArray = props.data;
  return (
    <div style={{ paddingTop: '150px' }}>
      <h1>UI Boxes</h1>
      <div style={{ width: '700px' }}>
        {componentArray.map((component, index) => {
          console.log('Xxx');
          return (
            <Grid item xs={3} key={component.id}>
              <IFrames
                html={component.html}
                css={component.css}
                js={component.js}
              />
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

const Item = (props) => {
  return (
    <div className="itemCard">
      <h2 style={{ marginBottom: '10px' }}>{props.heading}</h2>
      <div className={props.ourClass}>UI BUTTON</div>
    </div>
  );
};
