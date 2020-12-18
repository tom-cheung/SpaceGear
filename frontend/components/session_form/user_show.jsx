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
        console.log(this.props.orders)
        return(
            <div className="userInfoContainer">
                <div>
                    <header id="userHeader">
                        <Link id="logoutButton" onClick={this.logoutUser} to="/">LOGOUT</Link>
                        <h1 id="accountTitle">MY ACCOUNT</h1>
                        <p>Welcome back, {this.props.currentUser.email}!</p>
                    </header>
                </div>

                <div id='orderContainer'>
                    <h2>MY ORDERS</h2>
                    
                    <ul>
                        {this.props.orders ? this.props.orders.map((order) => {return <Link to={`/order/${order.id}`} key={order.id}><li key={order.id}>Order Number: {order.id} / Total: ${parseFloat(order.total).toFixed(2)}</li></Link>} ) : null}
                    </ul>
                    {/* <ul>
                        {orders.map( (order) => {
                            return <Link to={`/order/${order.id}`} key={order.id}><li key={order.id}>Order Number: {order.id} / Total: ${parseFloat(order.total).toFixed(2)}</li></Link>
                        })}
                    </ul> */}

                </div>

                <div id='addressContainer'>
                    <h2>MY ADDRESS</h2>
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