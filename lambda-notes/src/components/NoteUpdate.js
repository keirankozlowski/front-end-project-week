import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import './NoteForms.css';

class NoteUpdate extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            id: props.note.id,
            title: props.note.title,
            content: props.note.content
        }
    }

    handleInput = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <h1>Edit Note:</h1>
                    <form className="form">
                        <input
                            className="title"
                            type="text"
                            name="title"
                            placeholder="Note Title"
                            onChange={this.handleInput}
                            value={this.state.title}
                        />

                        <textarea
                            className="content"
                            rows="25"
                            type="text"
                            name="content"
                            placeholder="Note Content"
                            onChange={this.handleInput}
                            value={this.state.content}
                        />
                        <button onClick={this.props.updateNote(this.state)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.singleFetchedNote
    }
}

export default connect(mapStateToProps, {})(NoteUpdate);