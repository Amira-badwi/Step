import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import'swiper/css'
import'swiper/css/free-mode'
import {Card,Button} from 'react-bootstrap'
import'./CoursesSwipper.css'

function News(){

    const [NewsData, setNewsData ] = useState([])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2023-02-18&sortBy=popularity&apiKey=9af35b4a4fd741f8b76e9f7f51486ac7", 
            {
             
            }
        )
         .then((data) => setNewsData(data.data.articles))
        // .then((data) => console.log(data.data.articles))
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
             <h1 className="h1HomeCoursesStyle fw-bold mt-5">News Feed</h1>
             <div className='container py-4 px-4 justify-content-center '>
                <div className="row">
<Swiper
freeMode={true}
grabCursor={true}
modules={[FreeMode]}
className='mySwipper'
// slidesPerView={5}
// spaceBetween={30}
breakpoints={{
    0:{
        slidesPerView:1,
        spaceBetween:10,
    },
    480:{
        slidesPerView:2,
        spaceBetween:10,
    },
    768:{
        slidesPerView:3,
        spaceBetween:15,
    },
    1024:{
        slidesPerView:2,
        spaceBetween:10,
    },
    1280:{
        slidesPerView:2,
        spaceBetween:10,
    },
}}
>
                {NewsData.map((singleNews) =>   {
                    return(
                  
                    <SwiperSlide >
             
           <div >
          
        <Card className='p-0 overflow-hidden  shadow' style={{height:'500px'}}>
<div className='overflow-hidden rounded p-0 bg-light'>
  <Card.Img variant='top' src={singleNews.urlToImage} className='img-fluid'/>  
</div>

<Card.Body className='text-center'>
<Card.Title className='homeCourseCardTitle display-6 fs-col-6 fs-md-2 overflow-hidden'>{singleNews.title}</Card.Title>
<Card.Title className='text-dark mt-1 ' >{singleNews.description}</Card.Title>
</Card.Body>
        </Card>  
       
         </div> 
         </SwiperSlide>
        
                    )
                    
                })}
          </Swiper></div></div>
        </>
       
    )
}

export default News;