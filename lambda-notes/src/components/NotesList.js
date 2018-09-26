import React from 'react';

import Note from './Note';

const NotesList = props => {
    return (
        <div>
            <h2>Notes: </h2>
            <p>
                {props.notes.map(note => {
                    console.log(props.notes);
                    return (
                        <div
                            key={note._id}
                            onClick={() => props.history.push(`/notes/${note._id}`)}
                        >
                            <h2>{note.title}</h2>
                            <p>{note.textBody}</p>
                        </div>
                    )
                })}
            </p>
        </div>
    );
}

export default NotesList;