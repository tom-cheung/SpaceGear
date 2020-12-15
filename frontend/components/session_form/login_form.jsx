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
        this.setState({email: 'Astronaut@gmail.com', password: 'astronaut'}); // this triggers a rerender 
        setTimeout(() => {this.props.loginUser(this.state)}, 1000);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let user = Object.assign({}, this.state)
        this.props.loginUser(user);
    }

    componentWillUnmount() {
        this.props.clearErrors(); 
        // this.setState({[this.state.errors.session]: []})
    }

    render() {

       const {errors: {session}} = this.props
        
       

        return(
            <div className="formContainer">
                <form className="sessionForm" onSubmit={this.handleSubmit} width="500">

                    <h1 className="formTitle">{this.props.formType}</h1>
                    <div id="loginErrorContainer">
                        {session.length > 0 ? session.map((err, idx) => { return <li className="errorMessage" key={idx}>{err}</li>} ) : <li className="errorMessage"></li>}
                    </div>
                    <input className="sessionInput" type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange('email')}/>
                    <input className="sessionInput" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')}/>
                    <button className="sessionButtons">LOGIN</button>
                    <p>Don't have an account? <Link to='/register'>Create one!</Link></p>
                    <button className="sessionButtons" onClick={this.demo}>DEMO LOGIN</button>
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