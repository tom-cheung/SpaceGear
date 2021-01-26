import React from 'react'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {

    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
    }

    componentDidMount() {
        this.props.fetchOrders();
    }

    logoutUser(e) {
        e.preventDefault;
        this.props.logoutUser();
        this.props.clearOrders();
    }

    render() {
        return(
            <div className="account-container">
                <div className="header-container">
                    <Link id="logout-button" onClick={this.logoutUser} to="/">LOGOUT</Link>
                    <h1 id="account-title">MY ACCOUNT</h1>
                    <p id="welcome-message">Welcome back, {this.props.currentUser.email}!</p>
                </div>

                <div className="user-information-container">

                    <div className='order-container'>
                        <h1 id="order-title">MY ORDERS</h1>

                        <ul>
                            {this.props.orders.map((order) => {
                                return (
                                    <div key={order.id}>
                                        <h1 className="order-ref">Order Number: {order.id} / Total: ${parseFloat(order.total).toFixed(2)}</h1> 
                                        <button className="order-cancel-button" onClick={() => this.props.deleteOrder(order.id)}>Cancel Order</button> 
                                    </div>
                                )})}
                        </ul>
                    </div>

                    <div className='address-container'>
                        <h1 id="address-title">MY ADDRESS</h1>
                        <p>732 Harris Street</p>
                        <p>New York, NY 10017</p>
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