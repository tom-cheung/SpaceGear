import React from 'react'
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

const HeaderDropdown = ({categoryName, categoryId, categoryTypes}) => {
    return(
        <div className="dropDown">

            <Link to={`/products/${categoryName}/${categoryId}`}><h1 className="header-category-name">{categoryName}</h1></Link>

            <div className="dropdownContent">
                {categoryTypes.map((type, idx) => {return <Link to={`/products/${categoryName}/${categoryId}/${type.type_name}/${type.id}`} key={idx}>{type.type_name}</Link>})}
                <Link to={`/products/${categoryName}/${categoryId}`}>View All</Link>
            </div>
        </div>
    )
}

export default HeaderDropdown; 