import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Table, { RowContext } from "../../components/table"

const data = [
  {
    englishName: "Chicken roll",
    arabicName: "ملفوف دجاج",
    category: "Western",
    cost: "13.00",
  },
  {
    englishName: "Chicken roll",
    arabicName: "ملفوف دجاج",
    category: "Western",
    cost: "13.00",
  },
]

const Menu = props => {
  return (
    <Layout>
      <div>
        <h1>MENU</h1>
        <Filter />
        <Link to="/menu/new">Add new meal</Link>
        <br />
        <Link to="/menu/upload">Upload Excel file</Link>
        <Table
          headers={["Meal name", "اسم الوجبة", "Category", "Cost", "Actions"]}
          data={data}
        >
          <TableRowData />
        </Table>
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

const TableRowData = props => {
  const row = useContext(RowContext)
  return (
    <tr>
      <td>
        <Link to="/menu/meal">{row.englishName}</Link>
      </td>
      <td>
        <Link to="/menu/meal">{row.arabicName}</Link>
      </td>
      <td>
        <Link to="/menu/category">{row.category}</Link>
      </td>
      <td>SAR {row.cost}</td>
      <td>
        <Link to="/menu/edit">Edit / Delete</Link>
      </td>
    </tr>
  )
}

export default Menu
