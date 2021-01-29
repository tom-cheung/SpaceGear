import * as ContactAPIUtil from '../util/contact_util';

export const RECEIVE_CONTACT = 'RECEIVE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const RECEIVE_CONTACT_ERROR = 'RECEIVE_CONTACT_ERROR';
export const REMOVE_CONTACT_ERROR = 'REMOVE_CONTACT_ERROR';

const receiveContact = (contacts) => {
    return ({
        type: RECEIVE_CONTACT, 
        contacts: contacts, 
    })
}

const removeContact = (contact) => {
    return ({
        type: REMOVE_CONTACT,
        contactID : Object.keys(contact)[0],
    })
}

const receiveContactError = (error) => {
    return ({
        type: RECEIVE_CONTACT_ERROR, 
        error: error.responseJSON
    })
}

export const removeContactError = () => {
    return ({
        type: REMOVE_CONTACT_ERROR
    })
}

export const createContact = (newContact) => (dispatch) => {
    return ContactAPIUtil.createContact(newContact)
        .then(res => dispatch(receiveContact(res)), err => dispatch(receiveContactError(err)))
}

export const retrieveContact = (userID) => (dispatch) => {
    return ContactAPIUtil.retrieveContact(userID)
        .then(res => dispatch(receiveContact(res)), err => dispatch(receiveContactError(err)))
}

export const editContact = (newContact) => (dispatch) => {
    return ContactAPIUtil.editContact(newContact)
    .then(res => dispatch(receiveContact(res)), err => dispatch(receiveContactError(err)))
} // needs the contact id within newContact 

export const deleteContact = (contactID) => (dispatch) => {
    return ContactAPIUtil.deleteContact(contactID)
    .then(res => dispatch(removeContact(res)), err => dispatch(receiveContactError(err)))
}



