import React, { Component } from 'react';
import NotesIndex from './notes_index';

export default class App extends Component {
    render(){
        return( 
            <div>
                <div className="container">
                    <div className="row">
                    <div className="container-fluid">
                        <div className="jumbotron">
                            <h2 className="text-center">Your Digital Notepad</h2>
                            <p className="text-center">
                                <em><small>Create, Edit, and Delete Notes as you please</small></em>
                            </p>
                        </div>
                        </div>
                        <div className="container">
                        <div className="col-md-12">
                            <NotesIndex />
                        </div>
                        </div>
            </div>
            </div>
            </div>
        );
    }
}