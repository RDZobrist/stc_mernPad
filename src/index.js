import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import NotesIndex from './components/notes_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/" component={NotesIndex} />
   
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
