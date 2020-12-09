import { connect } from 'react-redux' // used to connected the store to this container, Provider is also a part of this library
import SessionForm from './session_form'

const mSTP = (state) => {
    return({
        user: {'email': '', 'password': ''},
        formType: 'Sign Up Form'
    })
}

const mDTP = (dispatch) => {
    return({

    })
}

export default connect(mSTP, mDTP)(SessionForm)


// remember the purpose of this container is to connect the store to the container to the component 
// so the components you want are probably 
// I think we can use the same container for both login and creation 