import { useState } from 'react';
import classes from './cssFiles/ListItem.module.css';
import { AiFillCaretRight } from 'react-icons/ai';
import SubList from './SubList';

export default function ListItem({ element }) {
  const [isOpen, setisOpen] = useState(false);
  let toggleArray = [];
  function toggle(key) {
    if (toggleArray[key] == true) toggleArray[key] = false;
    else {
      toggleArray.fill(false);
      toggleArray[key] = !toggleArray[key];
    }
  }
  return (
    <>
      <div
        className={`${classes.container} rounded-10`}
        onClick={() => setisOpen(true)}
      >
        <p>{element.name}</p>
        <AiFillCaretRight />
      </div>
      {isOpen && <SubList />}
    </>
  );
}
