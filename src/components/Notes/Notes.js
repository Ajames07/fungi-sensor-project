import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import NotesList from '../NotesList/NotesList';
import NotesListItem from '../NotesListItem/NotesListItem';
import NotesForum from '../NotesForum/NotesForum';

 class Notes extends Component {
    constructor(props) {
         super(props);

         this.state = {
            notesList: [],
        }
    }

    addNotes = (notes) => {
        console.log(notes);

        this.setState({
            notesList: [...this.state.notesList, this.state.notes],
        });
    }

  render() {
    return (
      <div>
        <Nav />
        <NotesForum addNotes={this.addNotes}/>
        <NotesList notesList={this.state.notesList}/>
      </div>
    )
  }
}

export default Notes;