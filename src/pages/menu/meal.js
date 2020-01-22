import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Meal = props => {
  return (
    <Layout>
      <div>
        <h1>Chicken Roll</h1>
        <select>
          <option>According to Excel sheet</option>
          <option>file-10/1/2020</option>
          <option>file-15/1/2020</option>
        </select>
        <h2>Ingredients:</h2>
        <table>
          <thead>
            <th>Ingredient</th>
            <th>Quantity per meal</th>
            <th>Sold</th>
            <th>Total material consumption</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td>1/2</td>
              <td>10</td>
              <td>5</td>
              <td>SAR 10.00</td>
            </tr>
            <tr>
              <td>Plate of rice</td>
              <td>100 gm</td>
              <td>10</td>
              <td>1000 gm</td>
              <td>SAR 2.00</td>
            </tr>
            <tr>
              <td>Bread</td>
              <td>1 pcs</td>
              <td>10</td>
              <td>10 pcs</td>
              <td>SAR 1.00</td>
            </tr>
          </tbody>
        </table>
        <h3>Total cost: SAR 13.00</h3>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

export default Meal
