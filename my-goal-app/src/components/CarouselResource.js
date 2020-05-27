import React, { Component } from 'react'

export default class CarouselResource extends Component {
    render() {
        return (
            <div>
                <h2 style={{color: 'white'}}>{this.props.name}</h2>
                <img src={this.props.url} />
            </div>
        )
    }
}
