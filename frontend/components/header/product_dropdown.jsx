import React from 'react'

const productDropdown = ({cat, typs}) => {
    return(
        <div className="dropDown">
            <a href="" className="dropBtn">{cat}</a>
            <div className="dropdownContent">
                {typs.map((typ, idx) => {return <a href="" key={idx}>{typ}</a>})}
            </div>
        </div>
    )
}

export default productDropdown; 