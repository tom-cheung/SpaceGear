import { connect } from 'react-redux'
import {fetchCategory} from '../../actions/category_actions'
import Header from './header'

const mSTP = (state) => {
    return ({
        categories: state.entities.categories
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchCategory: () => dispatch(fetchCategory())
    })
}


export default connect(mSTP, mDTP)(Header);