import store from "../store/store";
import Folder from "../components/NotesList/List/Folder/Folder";
import {NavLink} from "react-router-dom";
import selectNote from "../store/selectors/select-note";
import selectFolder from "../store/selectors/select-folder";

const generateFolderItems = (list) => {
  let result = [];
  let items = list.content.items;
  let folders = list.content.subfolders;
  const state = store.getState();
  for (let folder of folders) {
    let folderData = selectFolder(folder)(state);
    result.push({
      id: folder,
      element: <Folder name={folderData.name} items={generateFolderItems(folderData)}/>,
    })
  }
  for (let item of items) {
    let noteData = selectNote(item)(state);
    result.push({
      id: item,
      element: <li><NavLink to={`/note/${item}`}>{noteData.name}</NavLink></li>,
    })
    result.push()
  }
  return result;
}

export default generateFolderItems;