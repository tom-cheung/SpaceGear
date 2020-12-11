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
            <div class="formContainer">
            <form class="sessionForm" onSubmit={this.handleSubmit}>
                <h1 class="formTitle">{this.props.formType}</h1>

                <div class='session-error-container'>
                    {session.length > 0 ? session.map((err, idx) => {return <li class="errorMessage" key={idx}>{err}</li>}): <li class="errorMessage" ></li>}   
                </div>
                
                <input class="sessionInput" type="text" value={this.state.email} placeholder="Email:" onChange={this.handleChange('email')}/>
             
                <input class="sessionInput" type="password" value={this.state.password} placeholder="Password:" onChange={this.handleChange('password')}/>
               
                <button class="sessionButtons">Submit</button>
            </form>
            </div>
        )
    }
}


export default RegistrationForm;