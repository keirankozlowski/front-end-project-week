import React from 'react';

import Note from './Note';

export default function NotesList(props) {
    if(!props.notes || !props.notes.length) {
        return <h1>Unable to fetch any data.</h1>
    }

    return(
        <div>
            {props.notes.map((note) => (
                <div
                    key={note.id}
                    onClick={() => props.history.push(`/notes/${note.id}`)}
                >
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    )
}