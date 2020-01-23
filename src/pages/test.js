import React from "react"

const Context = React.createContext("")

export default props => {
  return (
    <Context.Provider value="WTF">
      <Child />
    </Context.Provider>
  )
}

const Child = props => {
  return <div>{React.useContext(Context)}</div>
}
