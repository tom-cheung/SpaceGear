import React from 'react'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
    }

    componentDidMount() {
        this.props.fetchOrders();
        this.props.retrieveContact(this.props.currentUser.id)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logoutUser();

        if(this.props.contact.length) {
            this.props.removeContact(this.props.contact[0].id);
        }
    }

    render() {
        let contact; 
        if(this.props.contact.length && this.props.contact[0].user_id === this.props.currentUser.id ) {
            contact = this.props.contact[0]
        }

        return(
            <div className="account-container">
                <div className="header-container">
                    <Link id="logout-button" onClick={this.logoutUser} to="/">LOGOUT</Link>
                    <h1 id="account-title">MY ACCOUNT</h1>
                    <p id="welcome-message">Welcome back, {this.props.currentUser.email}!</p>
                </div>

                <div className="titles-container">
                    <h1 id="order-title">MY ORDERS</h1>
                    <h1 id="address-title">MY CONTACT INFORMATION</h1>
                </div>

                <div className="user-information-container">

                    <div className='order-container'>

                        <ul>
                            {this.props.orders.map((order) => {
                                return (
                                    <div key={order.id} >
                                        {console.log(order)}
                                        <h1 className="order-ref">Order Number: {order.id} / Total: ${parseFloat(order.total).toFixed(2)}</h1>
                                        <div className="edit-delete-buttons">
                                            <button className="order-cancel-button" onClick={() => this.props.deleteOrder(order.id)}>Cancel Order</button> 
                                            <Link id="order-show-page" to={`/order/${order.id}`}><button className="order-cancel-button">Edit Order</button></Link> 
                                        </div>
                                    </div>
                                )})}
                        </ul>
                    </div>

                    <div className='address-container'>

                        {contact ? 

                            <div className="user-contact-container">
                                <div className="contact-name">
                                    <span>{contact.first_name} </span>
                                    <span>{contact.last_name}</span>
                                </div>
                                <p className="contact-field">{contact.address_one}</p>
                                <p className="contact-field">{contact.address_two}</p>
                                <p className="contact-field">{contact.city}</p>

                                <div className="city-state-zip">
                                    <span>{contact.state},</span>
                                    <span>{contact.country},</span>
                                    <span>{contact.zipcode},</span> 
                                </div>
                                <p className="contact-field">{contact.phone}</p>

                            </div>
                            :

                            null
                    
                        }
                    </div>

                </div>


                

            </div>
    )}
}

export default UserShow; 



/* 

    11:31AM 
        > created UserShow component 
        > create welcome messages
        > added in link to logout

    // shows address info, order history
    // should probably have seperate components for the order but redirect from here 

*/