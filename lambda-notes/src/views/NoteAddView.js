import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote, pickNoteToUpdate, updateNote } from '../actions';

import NoteAdd from '../components/NoteAdd';

class NoteAddView extends Component {
    state = {
        note: {
            _id: -1,
            title: '',
            textBody: '',
        },
        updatingNote: false
    }

    componentDidMount() {
        if(this.props.noteToBeUpdated) {
            this.setState({
                updatingNote: true,
                note: this.props.noteToBeUpdated
            })
        }
    }

    handleInput = event => {
        this.setState({
            note: {
                ...this.state.note,
                [event.target.name]: event.target.value
            }
        })
    }

    addNoteHandler = event => {
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.props.history.push('/notes');
    }

    updateNoteHandler = () => {
        this.props.updateNote(this.state.note);
        this.props.history.push('/notes');
    }

    render() {
        return(
            <NoteAdd 
                {...this.props}
                note = {this.state.note}
                handleInput = {this.handleInput}
                addNoteHandler = {this.addNoteHandler}
                updateNoteHandler = {this.updateNoteHandler}
                isBeingUpdated = {this.state.isBeingUpdated}
            />
        )
    }
}

const mapStateToProps = state => ({
    noteToBeUpdated: state.noteToBeUpdated
})

export default connect(mapStateToProps, { addNote, pickNoteToUpdate, updateNote })(NoteAddView);