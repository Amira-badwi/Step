import React from 'react'
import { showRating } from '../helpers/Helpers'

export default function ListItem({review}) {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-start'>
            <div className="ms-2 me-auto">

                <div className="fw-bold"> {review.name}</div>
                <p>{review.message}</p>
                <p>
                    {
                        showRating(review.rating)
                    }
                </p>
            </div>  
        </li>

    )
}