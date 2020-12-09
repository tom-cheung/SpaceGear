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
        const user = Object.assign({}, this.state)
        this.props.createUser(user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <label htmlFor="">Email: 
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
                </label>

                <label htmlFor="">Password: 
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>

                <button>Submit</button>
            </form>
        )
    }
}


export default RegistrationForm;