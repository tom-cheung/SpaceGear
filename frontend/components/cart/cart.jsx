import React from 'react';
import { Link } from 'react-router-dom'


class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
        }

        this.total = this.total.bind(this);
    }

    componentDidMount() {
        this.total()
    }

    total() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        this.setState({total: parseFloat(total)})
    }

    cartItems() {
        let items = Object.keys(localStorage);
        items = items.map( (id) => {return JSON.parse(localStorage.getItem(id))})
        return items;
    }

    updateQuantity({product}) {
        return(e) => {
            localStorage.setItem(product.id, JSON.stringify({'quantity': e.currentTarget.value, 'product': product}))
            this.total();
        }
    }

    removeItem(id) {
        localStorage.removeItem(id);
        this.total(); 
    }



    render() {
        console.log(this.cartItems())

        return (
            <div className="shopping-cart-container">

                {this.cartItems().length != 0 ? 

                <div>
                    <div className="cart-title">
                        <h1>CART</h1>
                    </div>

                    <div className="cart-product-list">

                        <div className="cart-details">
                            <h3 className="cart-cell">PRODUCT</h3>
                        </div>

                        <div className="cart-metrics">
                            <h3>QUANTITY</h3>
                            <h3 className="cart-total">TOTAL</h3>
                        </div>

                    </div>
                </div>
                : null
                }
                
                {this.cartItems().length != 0 ? this.cartItems().map((item, idx) => {
                    return (
                        <div key={item.product.id}>

                            <div className="items-in-cart">

                                <div>
                                    <img src={window.productImages[item.product.img_name]} alt="" width="200" height="200"/>
                                </div>

                                <div>
                                    <h2>{item.product.product_name}</h2>   
                                </div>
                                
                                <div className="cart-quantity">
                                    <input type="number" defaultValue={item.quantity} onChange={this.updateQuantity(item)} min="0"/>

                                    <button onClick={()=>{this.removeItem(item.product.id)}}>Delete Item</button>
                                </div>

                                <div>
                                    <h2>${  
                                        (parseFloat(JSON.parse(localStorage.getItem(item.product.id)).quantity) * parseFloat(item.product.price)).toFixed(2)
                                    }</h2>
                                    
                                </div>

                            </div>
                        </div> 
                    )

                }) : 
                
                <div>
                    <div>
                        <h1>YOUR CART IS EMPTY</h1>
                    </div>

                    <div>
                        <Link><button>SHOP OUR PRODUCTS</button></Link>
                    </div>
                </div>
                }

                {this.cartItems().length != 0 ? 
                    <div className="grand-total">
                        <label htmlFor="">Total: ${parseFloat(this.state.total).toFixed(2)}</label>
                    </div>
                : null
                }


                <br/><br/><br/>

                
            </div>
        )
    }

}


export default Cart;