import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import NotesIndex from './components/notes_index';
import NewNote from './components/new_note';
import EditNote from './components/edit_note'
import App from './components/app';
import NoteDetail from './components/note_detail';

import './stylesheets/main.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Switch>
          <Route path="/new/note" component={NewNote} />
          <Route path="/editnote/:id" component={EditNote} />
          <Route path="/note/:id" component={NoteDetail} />
          <Route path="/" component={App} />
        </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
