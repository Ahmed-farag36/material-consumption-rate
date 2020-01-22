import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const NewMeal = props => {
  return (
    <Layout>
      <div>
        <h1>New Meal</h1>
        <form>
          <label>Meal name</label>
          <input />
          <label>أسم الوجبه</label>
          <input />
          <label>Meal Category</label>
          <select>
            <option>Category</option>
            <option>Oriental</option>
            <option>Western</option>
            <option>Arabian</option>
          </select>
          <div>
            <h2>Ingredients</h2>
            <label>Ingredient</label>
            <select>
              <option>Ingredient</option>
              <option>Chicken</option>
              <option>Rice</option>
              <option>Bread</option>
            </select>
            <label>Quantity</label>
            <input type="number" min="0" />
          </div>
        </form>
        <button>Add more ingrediants</button>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

export default NewMeal
