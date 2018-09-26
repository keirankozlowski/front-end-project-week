import React from 'react';

const NoteAdd = props => {

    function submitHandler(event) {
        event.preventDefault();

        if (props.isBeingUpdated) {
            props.updateNoteHandler();
        } else {
            props.addNoteHandler(event);
        }
    }

    return (
        <div>
            <h1>{props.isBeingUpdated ? "Edit Note: " : "Create New Note: "}</h1>
            <form>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={props.handleInput}
                    value={props.note.title}
                />

                <label>Content</label>
                <input
                    type="text"
                    name="textBody"
                    placeholder="Content"
                    onChange={props.handleInput}
                    value={props.note.textBody}
                />
                <button onClick={props.submitHandler}>Submit</button>
            </form>
        </div>
    );
}

export default NoteAdd;