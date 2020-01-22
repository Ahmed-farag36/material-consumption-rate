import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Link to="/menu/all">Main Menu</Link>
    </div>
    <div>
      <Link to="/ingredients/all">Ingredients</Link>
    </div>
  </Layout>
)

export default IndexPage
