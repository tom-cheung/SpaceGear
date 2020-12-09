import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser } from '../../actions/user_actions'

const mSTP = (state) => {
    return {
        user: {'email': '', 'password': ''},
        formType: 'Login Form', 
        errors: state.errors
    }
}

const mDTP = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm);