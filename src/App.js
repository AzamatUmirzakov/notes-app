import NotesList from './components/NotesList/NotesList';
import NoteView from "./components/NoteView/NoteView";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./components/NoteView/Main/Main";

function App() {
  return (
    <div className="App">
      <NotesList/>
      <Routes>
        <Route path="/note" element={<NoteView/>}>
          <Route path=":noteId" element={<Main/>}/>
        </Route>
      </Routes>
      {/* Outline */}
    </div>
  );
}

export default App;
