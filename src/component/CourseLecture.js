import React from 'react'
import { useParams } from 'react-router-dom'

function CourseLecture() {
    const { courseName, id } = useParams()
    return (
        <div>
            <div className="container">
                <iframe width="720" height="420" src="https://www.youtube.com/embed/videoseries?list=PLUl4u3cNGP63micsJp_--fRAjZXPrQzW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default CourseLecture