import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchNotes } from '../actions';
import NoteDetail from './note_detail';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash';
class NotesIndex extends Component  {
    componentDidMount(){
        this.props.fetchNotes();
    }

    renderNotes(){
       
       return _.map(this.props.notes, note => {
           console.log(note)
           return (
               
               <li className="list-group-item" key={note.id}>
                    <Link to={`/note/${note.id}`}>{note.title}</Link>
               </li>
           )
       })
    }

    render(){
        const transitionOptions = {
            transitionName: 'fade',
            transitionEntertimeout: 500,
            transitionLeaveTimeout: 500
        }
        return(
            <div className="container add-note-container">
            <div>
            <Link className="btn btn-primary float-right" to="/new/note">
            Add a Note
            </Link>
            </div>
                <h3>Notes</h3>
                <ul className="list-group">
                {/* <ReactCSSTransitionGroup> */}
                   {this.renderNotes()}
                {/* </ReactCSSTransitionGroup> */}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { notes: state.notes }
}

export default connect(mapStateToProps, { fetchNotes })(NotesIndex);