export const createContact = (newContact) => {
    return (
        $.ajax(
            {
                url: "/api/contacts",
                method: "POST",
                data: {contact: newContact}, // has to be nested within data key 
            }
        )
    )
}

export const retrieveContact = (userID) => {
    return (
        $.ajax(
            {
                url: `/api/user/${userID}/contacts`,
                method: "GET"
            }
        )
    )
}

export const editContact = (newContact) => {
    return (
        $.ajax(
            {
                url: `/api/contacts/${newContact.id}`,
                method: "PATCH", 
                data: {contact: newContact}, 
            }
        )
    )
}

export const deleteContact = (contactID) => {
    return (
        $.ajax(
            {
                url: `/api/contacts/${contactID}`,
                method: "DELETE" 
            }
        )
    )
}