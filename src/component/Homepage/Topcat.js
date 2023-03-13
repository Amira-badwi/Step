import { useState } from "react";
import "./Topcat.css";
import course1 from '../../images/course1.jpg'
import cate2 from '../../images/cate2.jpg'
import Math from "../../assets/Math.jpg";
import MS from "../../assets/MS.jpg";
import TS from "../../assets/TS2.jpg";
import SC from "../../assets/SC.jpg";
export default function TopCATEGORIES(){
    const [data, setData] = useState(
        [
            { CardTitle:'Mathematics',Details:'Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures.' ,Cardimg:Math },
            {CardTitle:'Mental skills',Details:'A mental skill enables you to regulate thoughts, feelings, and actions. For example, staying focused, managing emotions, building confidence.' ,Cardimg:MS },
            { CardTitle:'Techaning strategy', Details:'Teaching strategies refer to the methods, and processes that a teacher uses during instruction and these strategies are multidimensional',Cardimg:TS},
            {CardTitle:'Science', Details:'Science is the pursuit and application of knowledge of the natural and social world following a systematic methodology based on evidence',Cardimg:SC},
        
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