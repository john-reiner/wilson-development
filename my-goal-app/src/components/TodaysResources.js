import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselResource from './CarouselResource';

export default function TodaysResources(props) {

    const renderResources = () => {
        return props.resources.map(resource => {
            return <CarouselResource key={resource.id} name={resource.name} url={resource.url}/>
        })
    }

        
        return (
        <div>
            <Carousel showThumbs={false} style={{width: '100%', height: '400px'}}>
                {renderResources()}
            </Carousel>
        </div> 
    )
}        
