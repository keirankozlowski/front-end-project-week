import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HomeView from '../views/HomeView';

import { fetchNotes, addNote, updateNote, deleteNote } from '../actions';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* implement a ternary operator for the loading screen */}
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Loading...</p>
        </div> */}

        <div>
          Temporary Sanity Checker
          <HomeView />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: props.fetchingNotes,
    addNote: props.addNote,
    updateNote: props.updateNote,
    deleteNote: props.deleteNote
  }
}

export default connect(mapStateToProps, { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote })(App);