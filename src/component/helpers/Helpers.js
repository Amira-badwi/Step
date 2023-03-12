
export const showRating = (rating) =>{
    switch(rating){
        case 1:
        return  <i className="fa-solid fa-star text-warning"></i>
        case 2:
        return (
            <>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
            </>
         )
        case 3:
        return  (
            <>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>

         </>
         )
        case 4:
        return  (
            <>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>


         </>
         )
        case 5:
        return (
            <>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         <i className="fa-solid fa-star text-warning"></i>
         </>
         )
         default:
            return 'something went wrong!'
    }

}