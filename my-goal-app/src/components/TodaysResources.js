import React from 'react';
import Resource from './Resource'

export default function TodaysResources(props) {

    const renderResources = () => {
        if (props.resources.length > 1) {
            return props.resources.map(resource => {
                return <Resource name={resource.name} description={resource.description} key={resource.id}/>
            })
        }
    }

    return (
        <div className="task-container">
            <h2>Resources</h2>
            <ul>
                {renderResources()}
            </ul>
        </div>
    )

}