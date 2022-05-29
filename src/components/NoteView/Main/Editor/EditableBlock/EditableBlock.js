import styles from './EditableBlock.module.css';
import ContentEditable from "react-contenteditable";
import {useRef, useState} from "react";

const EditableBlock = (props) => {
  const content = props.content;
  const handleChange = (event) => {
    props.updateBlock(props.index, {
      tag: content.tag,
      text: event.target.value,
    })
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.addNewBlock(props.index + 1, {
        tag: 'p',
        text: '',
      })
    }
  }
  const ref = useRef(null);
  return (
    <ContentEditable className={styles.editable} innerRef={ref} html={content.text} onChange={handleChange} onKeyDown={handleKeyDown} />
  )
}

export default EditableBlock