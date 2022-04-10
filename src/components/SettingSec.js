import React from 'react';
import classes from './cssFiles/SettingSec.module.css';
import componentsJSON from '../jsons/settingComponents.json';
import ListItem from './ListItem';

export default function SettingSec() {
  return (
    <div className={classes.container}>
      <div>
        <h2>Give style to your dreams here</h2>
      </div>
      <div className={`${classes.componentTreeBox} rounded-10`}>
        <div>
          {componentsJSON.components.map((element, index) => {
            return <ListItem cName={element.name} key={index} />;
          })}
        </div>
      </div>
      <div className={`${classes.componentCustomiationBox} rounded-10`}></div>
    </div>
  );
}
