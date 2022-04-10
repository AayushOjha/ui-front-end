import classes from './cssFiles/ListItem.module.css';
import { AiFillCaretRight } from 'react-icons/ai';

export default function ListItem({ cName }) {
  return (
    <div className={`${classes.container} rounded-10`}>
      <p>{cName}</p>
      <AiFillCaretRight />
    </div>
  );
}
