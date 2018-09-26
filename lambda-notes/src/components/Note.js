import React from 'react';
import { Route, Link } from 'react-router-dom';

const Note = props => {
    const note = props.notes.find(note => note._id === props.match.params.noteId);

    function deleteNoteHandler() {
        props.deleteNote(note._id);
        props.history.push('/notes');
    }
    
    return (
        <div>
            <button onClick={(event) => props.goToUpdateForm(event, note._id)}>
                Edit Note
            </button>
            <button onClick={deleteNoteHandler}>
                Delete Note
            </button>
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </div>
    )

}

export default Note;