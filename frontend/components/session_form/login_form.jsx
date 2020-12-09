import React from 'react' 
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) { // no es6 for this
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let user = Object.assign({}, this.state)
        this.props.loginUser(user);
    }

    render() {

       const {errors: {session}} = this.props

        return(
            <form onSubmit={this.handleSubmit}>

                <h1>{this.props.formType}</h1>

                {session.length > 0 ? session.map((err, idx) => { return <li key={idx}>{err}</li>} ) : null}
                
                <label htmlFor="">Email: 
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                </label>

                <label htmlFor="">Password: 
                    <input type="password" onChange={this.handleChange('password')}/>
                </label>

                <button to='/'>Login</button>
                <p>Don't have an account? <Link to='/register'>Create one!</Link></p>
            </form>
        )
    }
}

export default LoginForm;