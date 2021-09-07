import React from 'react'

function Rocket(props) {
    return (
        <div>
            <div className = "rocket text-center flex justify-end items-end text-sm text-white backdrop-filter backdrop-opacity-100">{props.title}</div>
        </div>
    )
}

export default Rocket
