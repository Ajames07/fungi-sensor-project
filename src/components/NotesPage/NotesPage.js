import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  personalNotesList: state.personalNotesList
})

class NotesPage extends Component {
  state = {
    notesRecord: {
      notes: '',
    }
  }

  handleNotesChange = (event) => {
    console.log('in handleNotesChange', event.target);
    this.setState({
      notesRecord: {
        notes: event.target.value,
      }
    });
  }

  // handleNotesSubmit = (event) => {
  //   console.log('in handleNotesSubmit');
  //   event.preventDefault();
  //   this.props.dispatch({ type: })
    
  // }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <table>
            <thead>
                <tr>
                  <th>
                   Notes:
                  </th> 
                </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          <div>
            <form onSubmit={this.handleNotesSubmit}>
              <div>
                <label>
                  Enter notes and observations here:
                </label>
                <input type="text" onChange={this.handleNotesChange} value={this.state.notesRecord.notes} placeholder="Notes and observations"/>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(NotesPage);