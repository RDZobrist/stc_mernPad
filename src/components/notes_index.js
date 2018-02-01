import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { fetchNotes } from '../actions';
import NoteDetail from './note_detail';
import { CSSTransitionGroup } from 'react-transition-group' 
import _ from 'lodash';
class NotesIndex extends Component  {
    componentDidMount(){
        this.props.fetchNotes();
    }

    renderNotes(){
       
       return _.map(this.props.notes, note => {
           return (
               <div>
               
               <tr className="list-group-item" key={note.id}>
                       <td><Link to={`/note/${note.id}`}>{note.title}</Link></td>
               </tr>
               </div>
           )
       })
    }

    render(){
        <CSSTransitionGroup
            transitionName="index_fade_in"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <h1>Fading at Initial Mount</h1>
        </CSSTransitionGroup>
        return(
            <div>
                <h3 className="text-center">Index</h3>

            <table className="table table-hover">
       <thead>
                
                <tr>Title</tr>
                <tbody className="list-group">
                   {this.renderNotes()}
                </tbody>
         </thead>
            </table>
            <div>
                <Link className="btn btn-success float-right" to="/new/note">
                    Add a Note
            </Link>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { notes: state.notes }
}

export default connect(mapStateToProps, { fetchNotes })(NotesIndex);