import { useState } from "react";
import "./Topcat.css";
import course1 from '../images/course1.jpg'
import cate2 from '../images/cate2.jpg'
export default function TopCATEGORIES(){
    const [data, setData] = useState(
        [
            { CardTitle:'Arabic',Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ,Cardimg:course1 },
            {CardTitle:'English',Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ,Cardimg:cate2 },
            { CardTitle:'Math', Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',Cardimg:course1},
            {CardTitle:'Science', Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',Cardimg:cate2},
        
        ])
    return (<>
    <div className="container">
        <div className="row">
            <div className="col-12">
<h1 className="h1Style fw-bold">Top categories</h1>
<p className="fs-3 pStyle text-dark">Pick the right category for you</p>
            </div>

        </div>
    </div>
    <div class="container">
  <div class="row flex-xl-nowrap">
    
    <div class="card-deck">
       
       
    </div>
  </div>
</div>
<div className="container">
                <div className="row">          
    {
        data.map((item)=>{
            return <div className="col-lg-3">
            <div class="card border-0 col-sm-4 p-0 col-lg-3" >
             <img class="card-img-top" src={item.Cardimg} alt="Card image cap"/> 
            <div class="card-body">
              <h4 class="card-title h4 homeCardTitle">{item.CardTitle}</h4>
              <p class="card-text">{item.Details}</p>
            </div>
          </div></div>
        }
       
        )
    }
    </div></div>
 
    
    </>)
}