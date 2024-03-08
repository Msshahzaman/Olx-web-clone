
import { register } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Typography,Grid,Paper,TextField,Button } from "@material-ui/core"


function Signup() {
//   const paperStyle = {
//     padding : '30px 20px',width:300, margin : '20px auto' , borderRadius : '20px'
//   }
// const btn = {
//   margin : '20px'
// }


    const navigate = useNavigate()
const [fname, setFname] = useState()
const [age, setAge] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()



const signup = async  () =>{

    // try{
    //    await register({fname,age,email,password} ) 
    //     navigate('/login')
    // }
    // catch(error){
    // console.log(error)
    // }
    
   await register({fname,age,email,password} ) 
    navigate('/')
    
    
       
    }





  return (
    <div>

        <h2> register</h2>

      
         fname : <input type="text" onChange={(e)=> setFname(e.target.value)} /> <br />
Age: <input type="text" onChange={(e)=> setAge(e.target.value)} /> <br />
email: <input type="text" onChange={(e)=> setEmail(e.target.value)}/> <br />
passwor : <input type="text" onChange={(e)=> setPassword(e.target.value)} />
<br />
<button onClick={signup} >register</button> 


{/* material ui work */}



{/* <Grid >
<Paper elevation={20} style={paperStyle}>




  <form>
  <h2>Signup</h2>

  <TextField id="standard-basic" label="full name" variant="standard" style={btn} onChange={(e)=> setFname(e.target.value)} />
  <TextField id="standard-basic" label="age" variant="standard" style={btn} onChange={(e)=> setFname(e.target.value)} />
  <TextField id="standard-basic" label="email" variant="standard"style={btn} onChange={(e)=> setFname(e.target.value)} />
  <TextField id="standard-basic" label="password" variant="standard" style={btn} onChange={(e)=> setFname(e.target.value)} />
  <Button variant="outlined" style={btn} onClick={signup}>register</Button>

  </form>




</Paper>
  
</Grid> */}





















    </div>
  )
}

export default Signup
