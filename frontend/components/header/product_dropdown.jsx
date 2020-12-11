import React from 'react'

const productDropdown = ({cat, typs}) => {
    return(
        <div class="dropDown">
            <li class="dropBtn">{cat}</li>
            <div class="dropdownContent">
                {typs.map((typ) => {return <a href="">{typ}</a>})}
            </div>
        </div>
    )
}

export default productDropdown; 