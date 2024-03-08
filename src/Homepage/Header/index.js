import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar,faBuilding,faPlus,faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import searchbar from '../../images/search bar.PNG'
import { useNavigate } from 'react-router-dom'



function Header(){
const navigate = useNavigate()





    
    return ( <div className='main-div'>
{/* Top-1 */}

{/* <div className="sticky-mode"> */}
<div className='top-1'>

<img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png" className='img-1' alt="" /> &nbsp;&nbsp;
<button className='action-btn1 like-btn like'><FontAwesomeIcon icon={faCar} /> MOTORS</button>
<button className='action-btn2 like-btn like'><FontAwesomeIcon icon={faBuilding} />  PROPERTY</button>

</div>
{/* Top-2 */}
<div className="top-2">

    <img src="https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-300x300.jpg" className='img-2' alt="" />
    
    <input type="text" className='srch-1' placeholder='Pakistan' />


    <input type="text" placeholder='Find Cars,Mobile Phones and more...' className='srch-2' />
{/* <button className='btn-magnifying'><img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/de4933aa-63b7-41e3-d554-3d194a645b00/public" alt="" /></button> */}

    <button className='login-btn'>Login</button>
    <button className='Sell-btn'><FontAwesomeIcon icon={faPlus} onClick={()=>navigate('/salepage')} /> Sell</button>
</div>
{/* </div> */}
<br />






{/* Top-3 */}
<div className="top-3">
<button className='action-btn1 like-btn like'> All categories <FontAwesomeIcon icon={faAngleDown} /></button>
<button className='action-btn1 like-btn like'>Mobile phones</button>
<button className='action-btn1 like-btn like'>cars</button>
<button className='action-btn1 like-btn like'>motocycles</button>
<button className='action-btn1 like-btn like'>houses</button>
<button className='action-btn1 like-btn like'>tablets</button>


</div>

{/* Top-4 */}

{/* Top-5 */}



{/* Top-6 */}

{/* <div className='top-6'>
<img src={require('../../images/./allcategories.PNG')}/>

</div> */}


    </div>
    )}
export default Header