import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class CarouselResource extends Component {
    render() {
        return (
            <Carousel.Item>
            <div ></div>
            <Carousel.Caption>
                <h3 style={{width: '100%', height: '100%'}}>{this.props.name}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
        )
    }
}
