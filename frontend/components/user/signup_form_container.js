import { connect } from 'react-redux' // used to connected the store to this container, Provider is also a part of this library
import SignUpForm from './sign_up_form'
import {createUser} from '../../actions/user_actions'

const mSTP = (state) => {
    return({
        user: {'email': '', 'password': ''},
        formType: 'Register'
    })
}

const mDTP = (dispatch) => {
    return({
        createUser: (user) => dispatch(createUser(user))
    })
}

export default connect(mSTP, mDTP)(SignUpForm)


// remember the purpose of this container is to connect the store to the container to the component 
// so the components you want are probably 
// I think we can use the same container for both login and creation 