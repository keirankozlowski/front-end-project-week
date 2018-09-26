import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateNote } from '../actions';

class NoteUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            title: "",
            textBody: ""
        }
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {
        this.setState({
            title: this.props.note.title,
            textBody: this.props.note.textBody,
            id: this.props.note._id
        })
    }
}

export default NoteUpdate;