import { useState } from "react";
import { Fragment } from 'react'
import './Courses.css'
import catagory1 from '../images/cate1.jpg'
import Carousel from 'react-elastic-carousel'
export default function Courses() {
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 4 },
    ];
    const [data, setData] = useState(
        [
            { CardTitle: 'Arabic', Details: 'sdsdf', Cardimg: { catagory1 } },
            { CardTitle: 'English', Details: 'sdsdf', Cardimg: { catagory1 } },
            { CardTitle: 'Math', Details: 'sdsdf', Cardimg: { catagory1 } },
            { CardTitle: 'Science', Details: 'sdsdf', Cardimg: { catagory1 } },
        ])
    return (<>
        <div className='container'>
            <Fragment>
                <h2 className="homeCourseHeader fw-bold">Start learning with free courses</h2>
                <section>

                    <div className='Homerow'>

                        <Carousel breakPoints={breakPoints}>
                            {
                                data.map((item) => {
                                    return <div className="col-lg-3">
                                        <div className='Homecourse'>

                                            <div className='homeCourse-thumb'>
                                                <a href='#'>
                                                    <img src={catagory1} alt='' />
                                                </a>
                                            </div>
                                            <div className='homeCourseBody'>
                                                <div className='homeCourseTitle'>
                                                    <h6>
                                                        {item.CardTitle}
                                                    </h6>
                                                </div>
                                                <div className='details'>
                                                    <span>{item.Details}</span>
                                                </div>
                                                <div className='homeCourseRating'>
                                                    <div className='homeStar'>
                                                        <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                                                    </div>
                                                </div>
                                                <div className='homefooter'>
                                                    <div className='Homebtn'>
                                                        <a href='#' className='btn Homebtn-Custom homePrimary'>Enroll now</a>
                                                        <a href='#' className='btn Homebtn-Custom homePrimary2 mt-1'>Quick view</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                }
                                )
                            }
                        </Carousel>
                    </div>

                </section>
            </Fragment>
        </div>
    </>)
}