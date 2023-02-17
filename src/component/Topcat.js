import { useState } from "react";
import "./Topcat.css";
export default function TopCATEGORIES(){
    const [data, setData] = useState(
        [
            { CardTitle:'Arabic',Details:'sdsdf'  },
            {CardTitle:'English',Details:'sdsdf'  },
            { CardTitle:'Math', Details:'sdsdf' },
            {CardTitle:'Science', Details:'sdsdf'},
        
        ])
    return (<>
    <div className="container">
        <div className="row">
            <div className="col-12">
<h1 className="h1Style">Top categories</h1>
<p className="fs-3 pStyle">Pick the right category for you</p>
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
            return <div className="col-4">
            <div class="card border-0 col-sm-4 p-0 " >
            {/* <img class="card-img-top" src="https://images.unsplash.com/photo-1584937247987-07276272d215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" alt="Card image cap"> */}
            <div class="card-body">
              <h4 class="card-title h4">{item.CardTitle}</h4>
              <p class="card-text">{item.Details}</p>
            </div>
          </div></div>
        }
       
        )
    }
    </div></div>
 
    
    </>)
}