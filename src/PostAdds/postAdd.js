import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { sellitem } from "../config/firebase"




function Sellpage(){
    const navigate = useNavigate()
    const [tital, setTital] = useState()
    const [desc, setDesc] = useState()
    const [price, setPrice] = useState()
    const [image, setImage] = useState()




    const postadd = async () =>{

        try{
           await sellitem({tital,desc,price,image} ) 
navigate('/dashboard')



            // navigate('/login')
            alert('add succefully posted')
        }
        catch(error){
        console.log(error)
        }
        
        
        
        
           
        }
        


    return <div>

        <h1>sell page</h1>

       add title : <input type="text" onChange={(e)=> setTital(e.target.value)} /> <br />
desc od add <input type="text" onChange={(e)=> setDesc(e.target.value)} /> <br />
add price: <input type="text" onChange={(e)=> setPrice(e.target.value)}/> <br />
add image: <input type="file" onChange={(e)=> setImage(e.target.files[0])}/> <br />
{/* passwor : <input type="text" onChange={(e)=> setPassword(e.target.value)} /> */}
<br />
<button onClick={postadd} >post</button> 

</div>
}
export default Sellpage