import styles from './Main.module.css';
import Editor from "./Editor/Editor";
import Header from "../Header/Header";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import selectNote from "../../../store/selectors/select-note";

const Main = (props) => {
  const {noteId} = useParams();
  const noteData = useSelector(selectNote(noteId));
  return (
    <main className={styles.main}>
      <Header title={noteData.name}/>
      <Editor data={noteData} id={noteId}/>
    </main>
  )
}

export default Main;