import styles from './Folder.module.css';
import React from "react";
import {useState} from "react";
import useCollapse from "react-collapsed";
import classNames from "classnames";

const Folder = (props) => {
  const [foldState, setFoldState] = useState(false);
  const handleClick = () => {
    setFoldState(!foldState);
  }

  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  return (
    <div className={classNames(styles.folder, {[styles.open]: foldState})}>
      <button className={styles.cover} {...getToggleProps({
        onClick: () => setFoldState((prev) => !prev),
      })}>
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Forward</title>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"
               d="M184 112l144 144-144 144"/>
        </svg>
        <p>{props.name}</p>
      </button>
      <ul className={styles.fold} {...getCollapseProps()}>
        {/*since items is an array of */}
        {props.items.map(item => <React.Fragment key={item.id}>{item.element}</React.Fragment>)}
      </ul>
    </div>
  )
}

export default Folder;