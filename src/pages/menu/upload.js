import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Table, { RowContext } from "../../components/table"

const data = {
  excelFiles: [
    {
      filename: "spreadsheet-250010",
      uploadedBy: "Mohamed Ahmed",
      uploadedAt: "10/1/2020",
    },
    {
      filename: "spreadsheet-250015",
      uploadedBy: "Mohamed Ahmed",
      uploadedAt: "15/1/2020",
    },
    {
      filename: "spreadsheet-250020",
      uploadedBy: "Mohamed Ahmed",
      uploadedAt: "20/1/2020",
    },
  ],
}

const Upload = props => {
  return (
    <Layout>
      <div>
        <h1>Upload Excel Sheet</h1>
        <input type="file" placeholder="Upload your file" />
        <h2>List of uploaded files</h2>
        <Table
          headers={["File name", "Uploaded by", "Uploaded at", "Actions"]}
          data={data.excelFiles}
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
      <td>{row.filename}</td>
      <td>{row.uploadedBy}</td>
      <td>{row.uploadedAt}</td>
      <td>
        <button>Delete File</button>
      </td>
    </tr>
  )
}

export default Upload
