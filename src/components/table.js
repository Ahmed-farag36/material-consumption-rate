import React from "react"

export const RowContext = React.createContext()

const Table = props => (
  <table>
    <thead>
      <tr>
        {props.headers.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {props.data.map((row, i) => {
        return (
          <RowContext.Provider value={row}>
            {props.children}
          </RowContext.Provider>
        )
      })}
    </tbody>
  </table>
)

export default Table
