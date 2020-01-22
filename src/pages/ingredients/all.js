import React from "react"
import { Link } from "gatsby"

const Ingredients = props => {
  return (
    <div>
      <h1>Ingredients</h1>
      <Filter />
      <Link to="/ingredient/new">Add new ingredient</Link>
      <table>
        <thead>
          <th>Ingredient name</th>
          <th>Ingredient name (in arabic)</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/">Chicken</Link>
            </td>
            <td>دجاج</td>
            <td>SAR 10.00</td>
          </tr>
          <tr>
            <td>
              <Link to="/">Rice</Link>
            </td>
            <td>ارز</td>
            <td>SAR 2.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Filter = props => {
  return (
    <form>
      <input placeholder="Search by name" />
      <select>
        <option>Sort by cost</option>
        <option>Lowest</option>
        <option>Highest</option>
      </select>
      {/* range input for price */}
    </form>
  )
}

export default Ingredients
