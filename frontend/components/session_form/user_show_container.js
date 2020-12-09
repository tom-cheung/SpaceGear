import UserShow from './user_show_container';
import { connect } from 'react-redux';

const mSTP = (state) => {
    return (
        {
            currentUser: state.entities.users[state.session.id]
        }
    )
}

const mDTP = (dispatch) => {
    return (
        {

        }
    )
}

export default connect(mSTP, mDTP)(UserShow);

// so after you login/register it'll take you back to the products page. 
// but your state should have the current user information 
// this should be connected to the account button on the products page 
// a protected route unless logged in 
// dont need errors just yet 
// functions - maybe create address - retrieve orders 