import React, { useState } from 'react'
import './css/Filter.css'

const Filter = (props) => {

    const dropDownStates = [
        {
            height: "0rem",
            visibility: "hidden",
            opacity: "0"
        },
        {
            height: "8rem",
            opacity: "1",
            visibility: "visible",
        }
    ]
    const [isVisible, setFilterState] = useState(false)

    function update_filter(callback, category) {
        props.updateCurrentCategory(category)
        callback(!isVisible)
    }

    return (
        <div className='filter'>
            <div onClick={() => setFilterState(!isVisible)} className='active-category'>
                {props.currentCategory}
                <i className="fas fa-level-down-alt"></i>
            </div>
            <div style={isVisible ? dropDownStates[1] : dropDownStates[0]} className='filter-dropdown'>
                {
                    props.categories.map((category, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => update_filter(setFilterState, category)}
                                className={"filter-option"}>
                                <p>
                                    {category}
                                </p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter
