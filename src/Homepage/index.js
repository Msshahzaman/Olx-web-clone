import { useState,useEffect } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Header/header.css'


function Homepage(){
    const navigate = useNavigate()

const [AddsData, setAddsData] = useState([])


    useEffect(()=>{
        getDataFromAPI()
    },[])

function getDataFromAPI(){
    
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>setAddsData(res.products));
}
if(!AddsData.length){
    return <div>
        <h1>loading adds..</h1>
    </div>
}



    return ( <>
<section>


<div >
    {/* <img src="../../images/sell it.PNG" alt="" /> */}
    <img src="https://images.olx.com.pk/thumbnails/295176473-800x600.webp" className='sell-it-img' alt="" />
</div>



{/* Top-5 */}
<div className='top-5'>
 <h2 >All Categories</h2>


</div>








{/* Top-6 */}

<div className='top-6'>
<img src={require('../images/allcategories.PNG')}/>

</div>

{/* Top-7 */}


<div>
<h2>Mobile phones</h2>
</div>





<br />



    <div  className="adSec">

{
    AddsData.map((items)=>{
        const {id,title,thumbnail,price} = items

        return <div onClick={()=>navigate(`/details/${id}`) } className="adbox">
          <img  src={thumbnail} />
          <p className="price">Rs {price}</p>
          <p className="title">{title}</p>
          <p className="khi">Karachi,Pakistan</p>
          <p className="week">1 week ago</p>
          

        </div>
    })
}



    </div> 
    
    </section> </>)}
export default Homepage