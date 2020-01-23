import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Table, { RowContext } from "../../components/table"
import Select from "../../components/select"

const data = {
  excelFiles: ["file-10/1/2020", "file-15/1/2020"],
  info: [
    {
      ingredient: "Chicken",
      quantityPerMeal: "0.5",
      sold: "10",
      totalMaterialConsumption: "5",
      price: "10.00",
      unit: "pcs",
    },
    {
      ingredient: "Plate of rice",
      quantityPerMeal: "100",
      sold: "10",
      totalMaterialConsumption: "1000",
      price: "2.00",
      unit: "gm",
    },
    {
      ingredient: "Bread",
      quantityPerMeal: "1",
      sold: "10",
      totalMaterialConsumption: "10",
      price: "1.00",
      unit: "pcs",
    },
  ],
}

const Meal = props => {
  return (
    <Layout>
      <div>
        <h1>Chicken Roll</h1>
        <Select options={data.excelFiles} label="According to Excel file" />
        <h2>Ingredients:</h2>
        <Table
          headers={[
            "Ingredient",
            "Quantity per meal",
            "Sold",
            "Total material consumption",
            "Price per one",
          ]}
          data={data.info}
        >
          <TableRowData />
        </Table>
        <h3>Total cost per meal: SAR {13.0}</h3>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

const TableRowData = props => {
  const row = useContext(RowContext)
  return (
    <tr>
      <td>{row.ingredient}</td>
      <td>
        {row.quantityPerMeal} {row.unit}
      </td>
      <td>{row.sold}</td>
      <td>
        {row.totalMaterialConsumption} {row.unit}
      </td>
      <td>SAR {row.price}</td>
    </tr>
  )
}

export default Meal
