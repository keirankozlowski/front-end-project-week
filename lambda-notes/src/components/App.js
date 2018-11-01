import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import HomeView from '../views/HomeView';

import { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote } from '../actions';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
    state = {
      newNote: {
        title: '',
        content: ''
      },
      selectedNote: {}
    }

    render() {
      console.log(this.state);
      return (
        <div className="App">
          {/* implement a ternary operator for the loading screen */}
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
          </div> */}
  
          <div>
            <HomeView />
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    addNote: state.addNote,
    updateNote: state.updateNote,
    deleteNote: state.deleteNote
  }
}

export default connect(mapStateToProps, { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote })(App);