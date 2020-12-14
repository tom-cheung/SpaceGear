import { connect } from 'react-redux'
import ProductIndex from './splash'
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

export default connect(mSTP, mDTP)(ProductIndex);
