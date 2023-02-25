/* eslint-disable no-unused-expressions */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCard from "../component/Homepage/NewsCard";

function ViewNews(){
    
      const param = useParams();

       const [Mynew, setNewsData ] = useState([]);
     useEffect(() => {
        axios.get(" https://newsapi.org/v2/everything?q=Apple&from=2023-02-18&sortBy=popularity&apiKey=9af35b4a4fd741f8b76e9f7f51486ac7"  )
          .then((news) =>{
        setNewsData( news.data.articles);
          })
        .catch((err) => console.log(err))

    }, [])
// var s= Mynew.find((ele)=>{
//     ele.author  ==param.id
// })
// console.log(Mynew.find((ele)=>{ele.author==param.author}));

    return(
        <>
          <div> amira</div>
              {/* <MyCard img={Mynew.urlToImage}  title={Mynew.title}  description={Mynew.description} />   */}
        </>
       
    )
}

export default ViewNews;