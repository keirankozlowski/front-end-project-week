import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../actions';

import NotesList from '../components/NotesList';

class NotesListView extends Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return(
            <NotesList {...this.props} />
        ) 
    }
}

const mapStateToProps = state => ({
    notes: state.notes
})

export default connect(mapStateToProps, { fetchNotes })(NotesListView);