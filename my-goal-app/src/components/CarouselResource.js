import React, { Component } from 'react'

export default function CarouselResource(props) {

    return (
        <div>
            <h2 style={{color: 'white'}}>{props.name}</h2>
            <img src={props.url} />
        </div>
    )
}
