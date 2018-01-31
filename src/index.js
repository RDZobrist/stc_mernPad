import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import NotesIndex from './components/notes_index';
import NewNote from './components/new_note';
import NoteDetail from './components/note_detail';

import './stylesheets/main.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Switch>
          <Route path="/new/note" component={NewNote} />
          <Route path="/note/:id" component={NoteDetail} />
          <Route path="/" component={NotesIndex} />
        </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
