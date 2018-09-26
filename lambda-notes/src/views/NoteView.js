import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes, pickNoteToUpdate, deleteNote } from '../actions';

import Note from '../components/Note';

class NoteView extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    deleteNoteHandler = noteId => {
        this.props.deleteNote(noteId);
    }

    goToUpdateForm = (event, _id) => {
        event.preventDefault();
        this.props.pickNoteToUpdate(_id);
        this.props.history.push('/addNote');
    }

    render() {
        return(
            <Note 
                {...this.props}
                notes = {this.props.notes}
                fetchingNotes = {this.props.fetchingNotes}
                deleteNoteHandler = {this.deleteNoteHandler}
                goToUpdateForm = {this.goToUpdateForm}
            />
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
})

export default connect(mapStateToProps, { fetchNotes, pickNoteToUpdate, deleteNote })(NoteView);