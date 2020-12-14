import React from 'react'
import ProductShowItem from './product_show_item'

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.filteredProduct
    }

    
    render() {
    
        return(
            <div className="product-show-container">
                {this.props.filteredProduct? < ProductShowItem product={this.props.filteredProduct}/>: null }
            </div>
        )
    }

}

export default ProductShow;