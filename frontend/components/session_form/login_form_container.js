import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser, clearErrors } from '../../actions/user_actions'

const mSTP = (state) => {
    return {
        user: {'email': '', 'password': ''},
        formType: 'Login', 
        errors: state.errors
    }
}

const mDTP = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(LoginForm);