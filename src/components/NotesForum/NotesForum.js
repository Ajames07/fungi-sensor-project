import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    // notes: state.notesDataList.notesDataList
    state
})

 class NotesForum extends Component {
     constructor(props) {
        super(props);

            this.state = {
                notes :this.props.state.notesDataList[0].notes,
        };
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({type:'GET_DATA',})
    }

    handleNotesChange = (event) => {
        console.log('in handleNotesChange', event.target);
        this.setState({
            ...this.state,
            notes: event.target.value, 
        });
    }

    handleNotesSubmit = (event) => {
        console.log('in handleNotesSubmit');
        event.preventDefault();
        this.props.dispatch({ type:'UPDATE_NOTES', payload: this.state.notes});
        
        this.props.addNotes(this.state.notes);
    }
      
  render() {
    //   console.log( this.props.state.notesDataList.notesDataList);
      
    return (
         
      <div>
          <form onSubmit={this.handleNotesSubmit}>
              <div>
                <label>
                  Enter notes and observations here:
                </label>
                <textarea type="text" onChange={this.handleNotesChange} value={this.state.notes} placeholder="Notes and observations"/>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              <p>{JSON.stringify(this.props.state.notesDataList[0].notes)}</p> 
            </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(NotesForum);