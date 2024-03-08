import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "../config/firebase"





function Login(){
    const navigate = useNavigate()

const [email, setEmail] = useState()
const [password, setPassword] = useState()



const signIn = async () => {

    await login({ email, password })
    navigate('/dashboard')
    

//     try{
//         await login({email,password})
//         navigate('/main-screen')

//     }catch(e){
// // alert(e)
//     }



}



    return  <div className="main-div">
<div className="card">



<h2>login</h2>

<div className="div-1">  email:  <input type="text" onChange={(e)=> setEmail(e.target.value)} /> </div>
     
      <br />

      password:  <input type="password" onChange={(e)=> setPassword(e.target.value)} className="inp-1" />
      <br />

        <button onClick={signIn}>login</button>
        

 <p>dont have accpunt? 


    <span onClick={()=>navigate('/register')}> click here</span>
 </p>

</div>



   </div>
}
export default Login;