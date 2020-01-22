import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const Upload = props => {
  return (
    <Layout>
      <div>
        <h1>Upload Excel Sheet</h1>
        <input type="file" placeholder="Upload your file" />
        <h2>List of uploaded files</h2>
        <table>
          <thead>
            <th>File name</th>
            <th>Uploaded by</th>
            <th>Uploaded at</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>spreadsheet-250010</td>
              <td>Mohamed Ahmed</td>
              <td>10/1/2020</td>
              <td>
                <button>Delete File</button>
              </td>
            </tr>
            <tr>
              <td>spreadsheet-250025</td>
              <td>Mohamed Ahmed</td>
              <td>20/1/2020</td>
              <td>
                <button>Delete File</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

export default Upload
