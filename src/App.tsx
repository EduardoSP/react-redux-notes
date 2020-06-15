import React from 'react';
import './App.css';
import { NewNoteInput } from './NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './notesReducer';
import { addNote, deleteNote } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  }
  const onDeleteNote = (note: string)=>{
    dispatch(deleteNote(note));
  }

  return (
    <div 
    style={{
        position: 'absolute', left: '40%', top: '10%'
    }}
    >
      <NewNoteInput addNote={onAddNote} />
      <br />
      <table>
        <thead>
          <tr>
            <th>Mensaje</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => {
            return (
            <tr key={index}>
              <td>{note}</td>
              <td><button onClick={()=> onDeleteNote(note)}>Borrar</button></td>
            </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
