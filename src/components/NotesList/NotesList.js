import React, { Component } from 'react';
import NotesListItem from '../NotesListItem/NotesListItem.js';

 class NotesList extends Component {
     constructor(props) {
        super(props);

        this.state = {
             notesList: [],
        }
    }

  render() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Notes:
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    {this.state.notesList.map((notes,i) => {
                        return (
                            <NotesListItem key = {i} notesData={notes}/>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
  }
}

export default NotesList;