import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchNotes } from '../actions';

import _ from 'lodash';
class NotesIndex extends Component  {
    componentDidMount(){
        this.props.fetchNotes();
    }

    renderNotes(){
       
       return _.map(this.props.notes, note => {
           return (
               <li className="list-group-item" key={note.id}>
                    {note.body}  
               </li>
           )
       })
    }

    render(){
        return(

            <div><div className="text-xs-right">
            <Link className="btn btn-primary" to="/postanote">
            Add a Note
            </Link>
            </div>
                <h3>Notes</h3>
                <ul className="list-group">
                {this.renderNotes()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { notes: state.notes }
}

export default connect(mapStateToProps, { fetchNotes })(NotesIndex);