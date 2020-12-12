import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';

// testing 
import * as catAPIUtil from './util/category_util'
import configureStore from './store/store'
import { fetchCategory } from './util/category_util'
// testing 


document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');

    let store;

    if (window.currentUser) {
        const preloadedState = {
          session: { id: window.currentUser.id },
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser; 
        // the delete will remove the current user after creating a copy of the preloaded state 
        // this would make it so that when you reload you only have 1 current user 
      } else {
        store = configureStore();
      }

      // testing 
      window.fetchCategory = fetchCategory; 
      window.store = store; 
      // testing 
  
    ReactDOM.render(<Root store={store}/>, root); 
})