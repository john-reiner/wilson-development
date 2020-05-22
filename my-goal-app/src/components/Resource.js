import React from 'react'

export default function Resource(props) {
    return (
        <div>
            <li>{props.name}</li>
            <p>{props.description}</p>
        </div>
    )
}
