import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import NotesIndex from './components/notes_index';
import PostNote from './components/post_note';
import './stylesheets/main.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Switch>
          <Route path="/postanote" component={PostNote} />
          <Route path="/" component={NotesIndex} />
        </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
