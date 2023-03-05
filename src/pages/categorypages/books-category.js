import BookCategory from "../../component/categoryComponent/bookCategory";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "../../component/categoryComponent/searchInput";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Books_category(){
    const [quiry,setquiry]=useState("ص");
    const [books,setbooks]=useState([{volumeInfo:{imageLinks:{thumbnail:""}
     ,title:"no item"}}],);
    useEffect(()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+quiry).then((data)=>{
if(data.data.totalItems!==0 )
{
    setbooks(data.data.items)
}
else{
    setbooks([{volumeInfo:{imageLinks:{thumbnail:""}
    ,title:"no item"}}])
}
        }).catch((error)=>{
            console.log(error);
        })
    },[quiry])
function search(e){
setquiry(e.target.value);
}

    return(<>
   <div class="input-group rounded my-3">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e)=>search(e)} />
<SearchIcon/>
</div>
      <div className="container-fluid">
     <div className="row m-auto">
{
books.map((item ,index)=>{
return(
   <div className=" col-lg-3 col-sm-6 col-md-4 col-6  " key={index}>

<BookCategory title={item.volumeInfo.title} img={item.volumeInfo.imageLinks.thumbnail}/>
</div>

)
})

}

     </div>
    </div>
    </>)
}