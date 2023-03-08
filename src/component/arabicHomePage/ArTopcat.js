import { useState } from "react";
import "./arTopcat.css";
import course1 from '../../images/course1.jpg'
import cate2 from '../../images/cate2.jpg'
export default function ArTopCATEGORIES(){
    const [data, setData] = useState(
        [
            { CardTitle:'Mathematics',Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ,Cardimg:course1 },
            {CardTitle:'Mental skills',Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' ,Cardimg:cate2 },
            { CardTitle:'Techaning strategy', Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',Cardimg:course1},
            {CardTitle:'Science', Details:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',Cardimg:cate2},
        
        ])
    return (<>
    <div className="container"  dir='rtl' >
        <div className="row">
            <div className="col-12">
<h1 className="h1Style fw-bold">أهم الفئات</h1>
<p className="fs-3 pStyle text-dark">اختر الفئة المناسبة لك</p>
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
            return <div className="col-lg-3 col-6 col-md-4 ">
            <div class="Homecard border-0  p-0 col-12" >
             <img class="Homecard-img-top" src={item.Cardimg} alt="Card image cap"/> 
            <div class="Homecard-body">
              <h4 class="card-title h4 homeCardTitle">{item.CardTitle}</h4>
              <p class="Homecard-text">{item.Details}</p><br/>
            </div>
          </div></div>
        }
       
        )
    }
    </div></div>
 
    
    </>)
}