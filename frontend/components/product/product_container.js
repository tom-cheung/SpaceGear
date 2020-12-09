import { connect } from 'react-redux'
import productIndex from './product_index'
import { logoutUser } from '../../actions/user_actions'

const mSTP = ({session, entities: { users }}) => {

    return ({
        currentUser: users[session.id]
    })
}

const mDTP = (dispatch) => {
    return ({
        logout: () => dispatch(logoutUser())
    })
}

export default connect(mSTP, mDTP)(productIndex);
