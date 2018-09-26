import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import NotesListView from '../views/NotesListView';
import NoteView from '../views/NoteView';
import NoteAddView from '../views/NoteAddView';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <h1>Lambda Notes</h1>
          <NavLink to='/notes'>View Your Notes</NavLink>
          <NavLink to='/addNote'>+ Create New Note</NavLink>
        </div>
        <div>
          <Route exact path='/' component={NotesListView} />
          <Route path='/create' component={NoteAddView} />
          <Route path='/route/:_id' component={NoteView} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);