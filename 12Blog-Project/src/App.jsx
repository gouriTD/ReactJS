
import { useEffect, useState } from "react"
import InputField from "../components/InputField";
import {authService} from '../services/auth'
import {useDispatch,useSelector} from 'react-redux'
import { loggedIn, loggedOut } from "../store/authSlice";

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [loader,setLoader] = useState(true);

  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(state=>state.isUserLoggedIn)

  useEffect(()=>{
    
    authService.isUserLoggedIn()
                .then((userData)=>{
                  if(userData){
                    dispatch(loggedIn(userData))
                  }else {
                    dispatch(loggedOut())
                  }
                  
                }).catch(error=>console.log(error))
                .finally(()=>{
                  setTimeout(()=>{
                    setLoader(false)
                  },500)
                })
  },[])

  const clearForm = ()=>{
    setEmail('');
    setUsername('');
    setPassword('');
  }
  const signupHandler = async()=>{
    setLoader(true)
    try {
      
      const res = await client.signUp(email,username,password)
      if(res?.userId){
        alert(`You have been loggedIn with userId : ${res?.userId}`)
        console.log(JSON.stringify(res))
      }
      setLoader(false)
      clearForm();
    } catch (error) {
      setLoader(false)
      console.log(error)
    }
   
  }

  if(loader){
    return(<h2 className={`text-2xl text-purple-800 font-bold `}>Loading .....</h2>)
  } else if(isUserLoggedIn){
    return(
      <>
        <h2 className={`text-2xl text-green-900  font-bold`}>UserLogged In</h2>
      </>
    )
  }
  return (
    <>
      <div className=" w-[100vw] h-[100vh] flex flex-col items-center py-10" style={{backgroundImage: `url("https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800")`}}>
        <h1 className=" bg-slate-800 text-white text-center mb-10">React Blog Project</h1>
          <div className=" shadow-lg w-[35%] rounded-lg p-10 flex flex-col justify-center items-center bg-slate-50">
              <h1 className=" text-2xl font-semibold text-center">Create Account</h1>
              <div className=" self-start w-[100%] py-6">

                  {/* Email inputField */}
                  <InputField label="Email" value={email} setValue={setEmail} inputType="email" placeholderText="Enter email..."/>

                  {/* Username inputField */}
                  <InputField label="Username" value={username} setValue={setUsername} inputType="text" placeholderText="Enter username..."/>

                  {/* Password inputField */}
                  <InputField label="Password" value={password} setValue={setPassword} inputType="password" placeholderText="Enter password..."/>
              </div>
              <button className=" bg-blue-900 text-lg text-white py-2 px-4 my-8 w-[80%] self-center rounded-md" style={{backgroundImage: `linear-gradient(to right, blue , purple)`}} onClick={signupHandler}>SignUp</button>
              <div className=" text-gray-500 font-bold my-8">
                <small>Have already an account? <a href="#" className=" text-gray-500 underline">Login here</a></small>
              </div>
          </div>
      </div>
     
    </>
  )
}

export default App
