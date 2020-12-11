import React from 'react'

const productDropdown = ({cat, typs}) => {
    return(
        <div class="dropDown">
            <li class="dropBtn">{cat}</li>
            <div class="dropdownContent">
                {typs.map((typ, idx) => {return <a href="" key={idx}>{typ}</a>})}
            </div>
        </div>
    )
}

export default productDropdown; 