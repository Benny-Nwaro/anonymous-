import { useEffect, useState } from 'react'
import axios from "axios"


function App() {
  const [user, setUser] = useState("")
  const [userSecret, setUserSecret] = useState("")

  useEffect(()=>{
    async function fetchData(){
      try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        if(result){
          setUser(result.data.username)
          setUserSecret(result.data.secret)
        }
      } catch (error) {
        console.log(error.response);
        
      }
    }
    fetchData() 
  },[])

  return (
    <>
    <h1>What's your secret?</h1>
  <div class="card">
    <p>
     {userSecret && userSecret}
    </p>
  </div>
  <p class="user">
   {user && user}
  </p>
    </>
  )
}

export default App
