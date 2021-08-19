import React from 'react'
import './Widget.css'
import Iframe from 'react-iframe'

function Widget() {
    return (
        <div className="widget">
            
            <Iframe width="100%" height="315" border="none" src="https://www.youtube.com/embed/O_9u1P5YjVc" title="YouTube video player" frameborder="none" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>

            <Iframe width="100%" height="315" src="https://www.youtube.com/embed/mAqYJF-yxO8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>

            <Iframe width="100%" height="315" src="https://www.youtube.com/embed/Rd74qNahRd4?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
    )
}

export default Widget
