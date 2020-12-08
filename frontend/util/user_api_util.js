export const createUser = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST', 
        data: {user: user}
    })
}

export const loginUser = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST', 
        data: user
    })
}

export const logoutUser = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}