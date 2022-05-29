import {createSlice} from "@reduxjs/toolkit";
import uid from '../../utils/unique-id';

const initialState = {
  // list will store only IDs instead of real objects. it will be easier to update contents this way
  list: {
    name: 'notes',
    id: 'root',
    content: {
      items: [
        // bunch of IDs
        'uiwefniu1231',
        'uowj23of2312',
        'of3nfi54',
      ],
      subfolders: [
        // bunch of IDs
        'c2o4ifm5',
      ],
    }
  },
  folders: {
    // folders will be stored here with id - value structure
    'c2o4ifm5': {
      name: "Test",
      parentId: 'root',
      content: {
        items: ['o4mnfo534'],
        subfolders: [],
      }
    }
  },
  notes: {
    'uiwefniu1231': {
      name: "Note 1",
      parentId: 'root',
      content: [
        {tag: 'h1', text: "Header", id: '12312'},
        {tag: 'h2', text: "Header 2", id: '121321'},
        {tag: 'p', text: "Paragraph 1", id: '123s2'},
        {tag: 'p', text: "Paragraph 2", id: '123s1'},
        {tag: 'p', text: "Paragraph 3", id: '243143'},
        {tag: 'p', text: "Paragraph 4", id: '52334'},
        {tag: 'p', text: "Paragraph 5", id: '423223'},
      ]
    },
    'uowj23of2312': {
      name: "Note 2",
      parentId: 'root',
      content: [
        {tag: 'h1', text: "Header", id: '12312'},
        {tag: 'h2', text: "Header 2", id: '121321'},
        {tag: 'p', text: "Paragraph 1", id: '123s2'},
        {tag: 'p', text: "Paragraph 2", id: '123s1'},
        {tag: 'p', text: "Paragraph 3", id: '243143'},
        {tag: 'p', text: "Paragraph 4", id: '52334'},
        {tag: 'p', text: "Paragraph 5", id: '423223'},
      ]
    },
    'of3nfi54': {
      name: "Note 3",
      parentId: 'root',
      content: [
        {tag: 'h1', text: "Header", id: '12312'},
        {tag: 'h2', text: "Header 2", id: '121321'},
        {tag: 'p', text: "Paragraph 1", id: '123s2'},
        {tag: 'p', text: "Paragraph 2", id: '123s1'},
        {tag: 'p', text: "Paragraph 3", id: '243143'},
        {tag: 'p', text: "Paragraph 4", id: '52334'},
        {tag: 'p', text: "Paragraph 5", id: '423223'},
      ]
    },
    'o4mnfo534': {
      name: "Note 4",
      parentId: 'c2o4ifm5',
      content: [
        {tag: 'h1', text: "Header", id: '12312'},
        {tag: 'h2', text: "Header 2", id: '121321'},
        {tag: 'p', text: "Paragraph 1", id: '123s2'},
        {tag: 'p', text: "Paragraph 2", id: '123s1'},
        {tag: 'p', text: "Paragraph 3", id: '243143'},
        {tag: 'p', text: "Paragraph 4", id: '52334'},
        {tag: 'p', text: "Paragraph 5", id: '423223'},
      ]
    },
  }
}

const contentSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const id = uid();
      const parentId = action.payload;
      state.notes[id] = {
        name: "Untitled",
        content: "",
        id,
      }
      if (parentId === 'root') {
        state.list.content.items.push(id);
      } else {
        state.folders[parentId].content.items.push(id)
      }
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      delete state.notes[id];
    },
    updateNote: (state, action) => {
      const {id, newData} = action.payload;
      state.notes[id] = newData;
    },
    addFolder: (state, action) => {
      const id = uid();
      const parentId = action.payload;
      state.folders[id] = {
        name: "Untitled",
        parentId,
        content: {
          items: [],
          subfolders: [],
        }
      }
      if (parentId === 'root') {
        state.list.content.subfolders.push(id);
      } else {
        state.folders[parentId].content.subfolders.push(id)
      }
    },
    deleteFolder: (state, action) => {
      const id = action.payload;
      delete state.folders[id];
    },
    updateFolder: (state, action) => {
      const {id, newContent} = action.payload;
      state.folders[id] = newContent;
    },
  }
})

export const {addNote, deleteNote, updateNote, addFolder, deleteFolder, updateFolder} = contentSlice.actions;
export default contentSlice.reducer
