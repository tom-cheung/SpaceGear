import React from 'react' 
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
        this.disableButton = false; 
    }

    handleChange(type) { // no es6 for this
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    demo(e) {
        e.preventDefault(); 
        this.setState({email: 'peanut', password: 'peanut'}); // this triggers a rerender 
        setTimeout(() => {this.props.loginUser(this.state)}, 1000);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let user = Object.assign({}, this.state)
        this.props.loginUser(user);
        console.log(this.props)
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
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>

                <button>Login</button>
                <p>Don't have an account? <Link to='/register'>Create one!</Link></p>

                <button onClick={this.demo}>Demo Login</button>
            </form>
        )
    }
}

export default LoginForm;

/**
 *  1:38PM added in demo button with event listener and handler to login a demo user  
 * 
 * 
 * 
 */