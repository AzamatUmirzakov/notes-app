import {useState} from "react";
import styles from './NotesList.module.css';
import Tabs from "./Tabs/Tabs";
import List from "./List/List";

const NotesList = (props) => {
  const [tab, setTab] = useState('home');
  return (
    <div className={styles.noteslist}>
      <Tabs tab={tab} setTab={setTab}/>
      <List/>
    </div>
  )
}

export default NotesList;
