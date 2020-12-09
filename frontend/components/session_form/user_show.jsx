const UserShow = (props) => {

    let {currentUser} = this.props;

    return(
        <div>
            <h1>MY ACCOUNT</h1>
            <p>Welcome back, {currentUser.email}!</p>
        </div>
    )
}

export default UserShow; 

// shows the username, address info, order history, 
// logout button should be here 
// should probably have seperate components for the order but redirect from here 