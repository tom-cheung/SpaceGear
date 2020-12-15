import { connect } from 'react-redux'
import ProductIndex from './splash'
import { logoutUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    return ({
        categories: Object.values(state.entities.categories)
    })
}

const mDTP = (dispatch) => {
    return ({

    })
}

export default connect(mSTP, mDTP)(ProductIndex);
