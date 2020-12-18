import { connect } from "react-redux";
import OrderShow from './order_show'
import { editOrder } from '../../actions/order_actions' 

const mSTP = (state) => {
    return({

    })
}

const mDTP = (dispatch) => {
    return({
        editOrder: (order, products) => dispatch(editOrder())
    })
}

export default connect(mSTP, mDTP)(OrderShow)