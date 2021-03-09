import React from 'react'

function News({title,description,imageurl,urlinfo}) {
    return (
        <div className="news">
            <h1>{title}</h1>
            <p>{description}<a href={urlinfo} target="_blank">Learn more.</a></p>
            <img src={imageurl} width="500" alt=""/>

        </div>
    )
}

export default News
