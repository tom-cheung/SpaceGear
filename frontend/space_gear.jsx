import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store'

// testing 
import { createContact, editContact, deleteContact, retrieveContact } from './util/contact_util'
// import {deleteOrder} from './actions/order_actions'
// testing 


document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById('root');
    // grabs the root.html.erb file 

    let store; 

    if (window.currentUser) {
        const preloadedState = {
          session: { id: window.currentUser.id },
          entities: {
            users: { [window.currentUser.id]: window.currentUser.user },
            categories: window.allCategories,
            orders: window.currentUser.orders
          }
        };
        store = configureStore(preloadedState);
        delete window.currentUser; 
        // the delete will remove the current user after creating a copy of the preloaded state 
        // this would make it so that when you reload you only have 1 current user 
      } else {
        const preloadedState = {
          entities: {
            categories: window.allCategories
          }
        };
        store = configureStore(preloadedState);
      }

   

      // testing 
      window.store = store; 
      window.createContact = createContact; 
      window.editContact = editContact; 
      window.deleteContact = deleteContact;
      window.retrieveContact = retrieveContact;
      // testing 
  
    ReactDOM.render(<Root store={store}/>, root); 
})