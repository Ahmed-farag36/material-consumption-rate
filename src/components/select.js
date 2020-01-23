import React from "react"

const Select = props => (
  <div>
    <label>{props.label}</label>
    <select>
      {props.options.map(option => (
        <option selected={props.selected === option}>{option}</option>
      ))}
    </select>
  </div>
)

export default Select
