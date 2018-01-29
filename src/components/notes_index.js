import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                    {note.category}  
               </li>
           )
       })
    }

    render(){
        return(

            <div>
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