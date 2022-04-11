import React from 'react';
import classes from './cssFiles/SettingSec.module.css';
import componentsJSON from '../jsons/settingComponents.json';
import ListItem from './ListItem';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../store/index';
import { bindActionCreators } from 'redux';

export default function SettingSec() {
  const dispatch = useDispatch();
  const { editHtml } = bindActionCreators(actionCreator, dispatch);
  const toAdd = '<div style="background-color:red">A new div</div>';

  let toggleArray = [];
  toggleArray = new Array(componentsJSON.components.length).fill(false);
  function toggle(key) {
    if (toggleArray[key] == true) toggleArray[key] = false;
    else {
      toggleArray.fill(false);
      toggleArray[key] = !toggleArray[key];
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <h2 onClick={() => editHtml(toAdd)}>Give style to your dreams here</h2>
      </div>
      <div className={`${classes.componentTreeBox} rounded-10`}>
        <div>
          {componentsJSON.components.map((element, index) => {
            return <ListItem element={element} key={index} />;
          })}
        </div>
      </div>
      <div className={`${classes.componentCustomiationBox} rounded-10`}></div>
    </div>
  );
}
