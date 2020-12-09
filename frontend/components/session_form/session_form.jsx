import React from 'react' 
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
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
        this.props.loginUser(this.state)
            // .then(() => this.props.history.push('/')); // this redirects you to the front page upon login 
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
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

export default SessionForm;