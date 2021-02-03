import { connect } from "react-redux";
import OrderShow from './order_show';
import { editOrder, deleteOrder } from '../../../actions/order_actions'; 
import { retrieveContact} from "../../../actions/contact_actions";

const mSTP = (state, ownProps) => {

    let order = state.entities.orders[ownProps.match.params.orderId];
    
    return({
        currentUser: Object.values(state.entities.users)[0], 
        order: order ?  order : {},
        orderedProducts: order ? order.ordered_product : [],
        products: state.entities.products, 
        // contact: Object.values(state.entities.contacts),
    })
}

const mDTP = (dispatch) => {
    return({
        editOrder: (order, products) => dispatch(editOrder(order, products)), 
        deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
        retrieveContact: (userID) => dispatch(retrieveContact(userID)),
    })
}

export default connect(mSTP, mDTP)(OrderShow)