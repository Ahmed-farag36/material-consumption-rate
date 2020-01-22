import React, {useState} from "react"

import Login from "../components/login"
import Signup from "../components/signup"

const Auth = props => {
  const [logOrReg, setLogOrReg] = useState(true);

  return (
    <div>
      <h1>Signup / Login</h1>
      <button onClick={() => setLogOrReg(true)}>Login</button>
      <button onClick={() => setLogOrReg(false)}>Signup</button>
      {logOrReg ? 
      <Login />:
      <Signup />
    }
    </div>
  )
}

export default Auth
