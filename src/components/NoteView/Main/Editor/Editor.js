import EditableBlock from "./EditableBlock/EditableBlock";
import styles from './Editor.module.css';
import {useDispatch} from "react-redux";
import {updateNote} from "../../../../store/slices/content-slice";

const Editor = (props) => {
  const noteData = props.data;
  const blocks = noteData.content
  const dispatch = useDispatch();
  const update = (newBlocks) => {
    dispatch(updateNote({
      id: props.id,
      newData: {
        name: noteData.name,
        parentId: noteData.parentId,
        content: newBlocks,
      }
    }))
  }
  const addNewBlock = (index, data) => {
    let newBlocks = [...blocks];
    newBlocks.splice(index, 0, data);
    update(newBlocks);
  }
  const deleteBlock = (index) => {
    let newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    update(newBlocks);
  }
  const updateBlock = (index, data) => {
    let newBlocks = [...blocks];
    newBlocks[index] = data;
    update(newBlocks);
  }
  return (
    <div className={styles.editor}>
      {blocks.map((content, i) => <EditableBlock key={content.id} addNewBlock={addNewBlock} updateBlock={updateBlock} deleteBlock={deleteBlock} index={i} content={content}/>)}
    </div>
  )
}

export default Editor;