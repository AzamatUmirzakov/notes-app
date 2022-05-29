import Main from "./Main/Main";
import styles from './NoteView.module.css';

const NoteView = (props) => {
  return (
    <div className={styles.noteview}>
      <Main/>
    </div>
  )
}

export default NoteView;