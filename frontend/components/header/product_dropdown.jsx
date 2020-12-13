import React from 'react'
import { Link } from 'react-router-dom'

const productDropdown = ({cat, typs}) => {
    return(
        <div className="dropDown">
            <a href="" className="dropBtn">{cat}</a>
            <div className="dropdownContent">
                {typs.map((typ, idx) => {return <Link to="/" key={idx}>{typ.type_name}</Link>})}
                <Link to="/">View All</Link>
            </div>
        </div>
    )
}

export default productDropdown; 