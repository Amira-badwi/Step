import "./banner.css";

import { products } from "../../data/products";
import Rating from "../rating/Rating";
import ProductDescription from "../productdescription/ProductDescription";
import Header from "../header/Header";


const Banner = () => {
    return (
    <div className="single-product">
        <Header />
        <div className="product-wrapper">
            <div className="product-image-wrapper">
               <img src={products.image} alt=""  />
            </div>
            <div className="product-info">
                <h1 className="product-title">{products.title}</h1>
                <Rating rating={products.rating} reviews={products.reviews} />
                <div className="product-price" >{products.price}</div>
                <div className="product-add-to-cart">
                <div> Number</div>
                <input type="number" min="1" max="10" />
                <button className="add-to-cart-btn">
                   Enroll in the course
                </button>
                </div>
                </div>
        </div>
        <ProductDescription />



                



    </div> );
}
 
export default Banner;