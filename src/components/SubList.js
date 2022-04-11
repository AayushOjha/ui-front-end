import React from 'react';
import classes from './cssFiles/SubList.module.css';

export default function SubList() {
  return (
    <div className={`${classes.container} rounded-10`}>
      <p>SubList Element</p>
    </div>
  );
}
