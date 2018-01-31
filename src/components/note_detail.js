import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../actions';
import { Link } from 'react-router-dom';
import NotesIndex from './notes_index';
class NoteDetail extends Component {
    componentDidMount(){
        // from react-router
        const { id } =  this.props.match.params;
        this.props.fetchNote(id);
    }
    render(){
        const { note } = this.props;
        if(!note){
            return <div>...Loading</div>
        }

        return(
            <div className="container">
            <Link to="/" Component={NotesIndex} >Back to Index</Link>
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

export default connect(mapStateToProps, { fetchNote })(NoteDetail);