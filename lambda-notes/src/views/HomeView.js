import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import NotesList from '../components/NotesList';

import { fetchNotes } from '../actions';

class HomeView extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <h1 className="notes-title">Your Notes:</h1>
                    <NotesList {...this.props} notes={this.props.notes} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes
    }
  }

export default connect(mapStateToProps, { fetchNotes })(HomeView);