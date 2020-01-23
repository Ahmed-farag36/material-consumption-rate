import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Table, { RowContext } from "../../components/table"
import Select from "../../components/select"

const data = {
  excelFiles: ["file-10/1/2020", "file-15/1/2020"],
  period: "1/1/2020 - 31/1/2020",
  category: "western",
  info: [
    {
      ingredient: "Chicken",
      sold: 10,
      consumption: 5,
      unit: "pcs",
    },
    {
      ingredient: "Plate of rice",
      sold: 10,
      consumption: 1000,
      unit: "gm",
    },
    {
      ingredient: "Bread",
      sold: 10,
      consumption: 10,
      unit: "pcs",
    },
  ],
}

const Consumption = props => {
  return (
    <Layout>
      <div>
        <h1>Total Material Consumption</h1>
        <Select options={data.excelFiles} label="According to Excel sheet" />
        <h2>Period: {data.period}</h2>
        <Table
          headers={["Ingredient", "Sold", "Total material consumption"]}
          data={data.info}
        >
          <TableRowData />
        </Table>
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
      <td>{row.sold}</td>
      <td>
        {row.consumption} {row.unit}
      </td>
    </tr>
  )
}

export default Consumption
