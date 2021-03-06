import UserShow from './user_show';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/user_actions';
import { fetchOrders, clearOrders, deleteOrder } from '../../actions/order_actions';
import { retrieveContact } from '../../actions/contact_actions'; 
import { removeContact } from '../../actions/contact_actions';


const mSTP = (state) => {
    return (
        {
            currentUser: state.entities.users[state.session.id],
            orders: Object.values(state.entities.orders), 
            contact: Object.values(state.entities.contacts), 
        }
    )
}

const mDTP = (dispatch) => {
    return (
        {
            logoutUser: () => dispatch(logoutUser()),
            fetchOrders: () => dispatch(fetchOrders()), // dispatches and ajax call then dispatches the object it returns, which will be the orders 
            clearOrders: () => dispatch(clearOrders()),
            deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
            retrieveContact: (userID) => dispatch(retrieveContact(userID)), 
            removeContact: (contactID) => dispatch(removeContact(contactID)),
        }
    )
}

export default connect(mSTP, mDTP)(UserShow);


/* 

so after you login/register it'll take you back to the products page. 
but your state should have the current user information 
this should be connected to the account button on the products page 
a protected route unless logged in 
dont need errors just yet 
functions - maybe create address - retrieve orders 

*/
