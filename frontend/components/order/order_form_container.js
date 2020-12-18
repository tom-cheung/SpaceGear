import { connect } from 'react-redux'
import OrderForm from './order_form'
import { createOrder } from '../../actions/order_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: Object.keys(state.entities.users)
    })
} 

const mDTP = (dispatch) => {
    return({
        createOrder: (order, products) => dispatch(createOrder(order, products))
    })
}

export default connect(mSTP, mDTP)(OrderForm);