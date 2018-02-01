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
            <div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="jumbotron">
                            <h2 className="text-center">Note in Detail</h2>
                            <p className="text-center">
                                <em><small>Where you have full control of the note</small></em>
                            </p>
                        </div>
                    </div>
                </div>
            <div className="container">
            <div className="card card-default">
                    <div className="card-title text-center">Note in detail</div>
                    <div className="card-body">
           
                <h4>Title of Note: {note.title}</h4>
                        <h6>Category: <small>{note.category}</small></h6>
                        <h6>Body: <small>{note.body}</small></h6>
                </div>
                <div className="container note-detail-links">
                <Link to="/" Component={NotesIndex} id="back-to-index-link" className="btn btn-outline-primary">Back to Index</Link>
                        <Link to={`/editnote/${note.id}`} Component={EditNote} className="btn btn-outline-secondary" id="edit-note-link">Edit Note</Link>
                {/* <button className="btn btn-warning pull-xs-right" onClick={this.onEditClick.bind(this)}>Edit Note</button> */}


                <button
                    className="btn btn-outline-danger "
                    id="delete-note-link"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Note</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
};

function mapStateToProps({ notes }, ownProps){
    return { note: notes[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchNote, deleteNote, editNote })(NoteDetail);