import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, deleteNote, editNote } from '../actions';
import { Link } from 'react-router-dom';
import NewNote from './new_note';
import EditNote from './edit_note'

import NotesIndex from './notes_index';
class NoteDetail extends Component {
    componentDidMount(){
        // from react-router
        const { id } =  this.props.match.params;
        this.props.fetchNote(id);
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.history.push('/new/note', id, () =>{
            
        })
        this.props.deleteNote(id, ()=>{
            this.props.history.push('/');
        });
    }
    onEditClick(){
        // const { id, title, body, category } = this.props.match.params;
        console.log('n_detail ', this.props)
        this.props.editNote(id, () => {
                this.props.history.push('/')
            })
        
       
       
    }
    render(){
        const { note } = this.props;
        if(note){
            console.dir(note.id)
        }

        return(
            <div className="container">
            <Link to="/" Component={NotesIndex} >Back to Index</Link>
                <Link to={`/editnote/${note.id}`} Component={EditNote} >Edit Note</Link>
                {/* <button className="btn btn-warning pull-xs-right" onClick={this.onEditClick.bind(this)}>Edit Note</button> */}
              

            <button 
            className= "btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}>
            Delete Note</button>
                <h3>{note.title}</h3>
                <h6>Category: {note.category}</h6>
                <p>{note.body}</p>
            </div>
        )
    }
};

function mapStateToProps({ notes }, ownProps){
    return { note: notes[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchNote, deleteNote, editNote })(NoteDetail);