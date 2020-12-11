import React from 'react'

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return(e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let user = Object.assign({}, this.state)
        this.props.createUser(user)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {

        let {errors: {session}} = this.props; 

        return(
            <div className="formContainer">
            <form className="sessionForm" onSubmit={this.handleSubmit}>
                <h1 className="formTitle">{this.props.formType}</h1>
                <p className="formMessage">Please fill in the information below:</p>
                <div className='session-error-container'>
                    {session.length > 0 ? session.map((err, idx) => {return <li className="errorMessage" key={idx}>{err}</li>}): <li className="errorMessage" ></li>}   
                </div>
                
                <input className="sessionInput" type="text" value={this.state.email} placeholder="Email:" onChange={this.handleChange('email')}/>
             
                <input className="sessionInput" type="password" value={this.state.password} placeholder="Password:" onChange={this.handleChange('password')}/>
               
                <button className="sessionButtons">Submit</button>
            </form>
            </div>
        )
    }
}


export default RegistrationForm;