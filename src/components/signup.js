import React from "react"

const Signup = props => {
  return (
    <div>
      <form>
        <label for="username">Username</label>
        <input id="username" />
        <label for="password">Password</label>
        <input id="conf-password" type="password" />
        <label for="password">Confirm Password</label>
        <input id="conf-password" type="password" />
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
