import React from 'react';
import styles from './List.module.css';
import Controls from "../Controls/Controls";
import generateFolderItems from "../../../utils/generate-folder-items";
import selectList from "../../../store/selectors/select-list";
import {useSelector} from "react-redux";

const List = (props) => {
  const content = useSelector(selectList);
  const generated = generateFolderItems(content);
  return (
    <div className={styles.list}>
      <Controls/>
      <h1>notes</h1>
      <div className={styles.content}>
        {generated.map(item => <React.Fragment key={item.id}>{item.element}</React.Fragment>)}
      </div>
    </div>
  )
}

export default List;