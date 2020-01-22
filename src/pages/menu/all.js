import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Menu = props => {
  return (
    <Layout>
      <div>
        <h1>MENU</h1>
        <Filter />
        <Link to="/menu/new">Add new meal</Link>
        <br />
        <Link to="/menu/upload">Upload Excel file</Link>
        <table>
          <thead>
            <th>Meal name</th>
            <th>اسم الوجبة</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/menu/meal">Chicken roll</Link>
              </td>
              <td>
                <Link to="/menu/meal">دجاج ملفوف</Link>
              </td>
              <td>
                <Link to="/menu/category">western</Link>
              </td>
              <td>SAR 13.00</td>
              <td>
                <Link to="/menu/edit">Edit / Delete</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/menu/meal">Chicken roll</Link>
              </td>
              <td>
                <Link to="/menu/meal">دجاج ملفوف</Link>
              </td>
              <td>
                <Link to="/menu/category">western</Link>
              </td>
              <td>SAR 13.00</td>
              <td>
                <Link to="/menu/edit">Edit / Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/menu/consumption">
          Total material consumption for all dishes
        </Link>
      </div>
    </Layout>
  )
}

const Filter = props => {
  return (
    <form>
      <input placeholder="Search by name" />
      <select>
        <option>Category</option>
        <option>Oriental</option>
        <option>Western</option>
        <option>Arabian</option>
      </select>
      <select>
        <option>Sort by cost</option>
        <option>Lowest</option>
        <option>Highest</option>
      </select>
    </form>
  )
}

export default Menu
