import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faComments,faLocationDot } from '@fortawesome/free-solid-svg-icons'


function AdDetails(){
const [AddDetails,setAddDetails] = useState([])
const {adId} = useParams()


useEffect(()=>{
   currentAdd()
},[])


function currentAdd(){
    
fetch(`https://dummyjson.com/products/${adId}`)
.then(res => res.json())
.then(res=>setAddDetails(res));
}



const {title,thumbnail,brand,category,discountPercentage,rating,images,price,description} = AddDetails


    return <div className="details-section">

{
    AddDetails == [] ? <h2>loading</h2> : 
    
<div className="detail-card">
<img src={thumbnail}/>



    </div>
}
{/* contact-card */}
<div className="contact-card">
<div>

<img className='pro-pic' src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/383090074_3237363789899327_4959807665965435829_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=l5Wph3H-ZlUAX9DpF5Z&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfC4ONnljsywL11w1zJgjpYc2oYHmy1_9T1npQFTlXFQiA&oe=65A57EA8" alt="" />

<p className="shah">Muhammad Shahzaman</p>
<p className="member">Member since Jan 2021</p>
<p className="see-profile">See Profile </p>
<button className="show-ph-no"> <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />    Show Phone Number</button>
<button className="chat"> <FontAwesomeIcon icon={faComments} />   Chat</button>
</div>


</div>
<br />
{/* contact-card */}
<div className="location-card">

    <h2 className="loc">Location</h2>
    <p className="gulshan"><FontAwesomeIcon icon={faLocationDot} /> Gulshan-e-iqbal, Karachi</p>
</div>
{/* price-card */}

<div className="price-card">
<h1 className="px">Rs {price}</h1>
<p className="item-name">{title}</p>
<p className="gulshan2"><FontAwesomeIcon icon={faLocationDot} /> Gulshan-e-iqbal, Karachi</p>

</div>
{/* details-card */}
{/* <div className="details-card">
    <h1>details</h1>
</div> */}
{/* description-card */}



<div className="description-card">
<h1 className="det">Details</h1>
    <p className="desc"><b>Description :</b> {description}</p>
    <p className="brand"><b> Brand :</b> {brand}</p>
    <p className="category"> <b>Category :</b> {category}</p>
    <p className="off"><b>Off :</b> {discountPercentage}</p>
    <p className="rating"> <b>Rating :</b> {rating}</p>
</div>






    </div>
}
export default AdDetails;