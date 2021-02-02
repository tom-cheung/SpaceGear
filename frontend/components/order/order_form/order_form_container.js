import { connect } from 'react-redux'
import OrderForm from './order_form'
import { createOrder } from '../../../actions/order_actions'
import {retrieveContact} from '../../../actions/contact_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: Object.keys(state.entities.users),
        contacts: Object.values(state.entities.contacts)
    })
} 

const mDTP = (dispatch) => {
    return({
        createOrder: (order, products) => dispatch(createOrder(order, products)),
        retrieveContact: (userID) => dispatch(retrieveContact(userID))
    })
}

export default connect(mSTP, mDTP)(OrderForm);