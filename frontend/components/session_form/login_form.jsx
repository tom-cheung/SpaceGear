import React from 'react' 
import { Link } from 'react-router-dom'
import { header } from '../header/header'


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

    componentWillUnmount() {
        this.props.clearErrors(); 
        // this.setState({[this.state.errors.session]: []})
    }

    render() {

       const {errors: {session}} = this.props

        return(
            <div class="formContainer">
                <form class="sessionForm" onSubmit={this.handleSubmit} width="500">

                    <h1 class="formTitle">{this.props.formType}</h1>
                    <div id="loginErrorContainer">
                        {session.length > 0 ? session.map((err, idx) => { return <li class="errorMessage" key={idx}>{err}</li>} ) : <li class="errorMessage"></li>}
                    </div>
                    <input class="sessionInput" type="text" value={this.state.email} placeholder="Email:" onChange={this.handleChange('email')}/>
                    <input class="sessionInput" type="password" value={this.state.password} placeholder="Password:" onChange={this.handleChange('password')}/>
                    <button class="sessionButtons">Login</button>
                    <p>Don't have an account? <Link to='/register'>Create one!</Link></p>
                    <button class="sessionButtons" onClick={this.demo}>Demo Login</button>
                </form>

            </div>

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