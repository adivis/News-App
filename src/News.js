import React from 'react'

function News({title,description,imageurl}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={imageurl} alt=""/>
        </div>
    )
}

export default News
