import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Category = props => {
  return (
    <Layout>
      <div>
        <h1>Material Consumption for Western Category</h1>
        <select>
          <option>According to Excel sheet</option>
          <option>file-10/1/2020</option>
          <option>file-15/1/2020</option>
        </select>
        <h2>Ingrediants:</h2>
        <table>
          <thead>
            <th>Ingrediant</th>
            <th>Sold</th>
            <th>Total material consumption</th>
          </thead>
          <tbody>
            <tr>
              <td>Chicken</td>
              <td>10</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Plate of rice</td>
              <td>10</td>
              <td>1000 gm</td>
            </tr>
            <tr>
              <td>Bread</td>
              <td>10</td>
              <td>10 pcs</td>
            </tr>
          </tbody>
        </table>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

export default Category
