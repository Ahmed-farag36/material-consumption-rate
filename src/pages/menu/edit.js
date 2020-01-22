import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

const EditMeal = props => {
  return (
    <Layout>
      <div>
        <h1>Edit Meal</h1>

        <form>
          <label>Meal name</label>
          <input value="Chicken Roll" />
          <label>Meal Category</label>
          <select>
            <option>Western</option>
            <option>Oriental</option>
            <option>Arabian</option>
          </select>
          <div>
            <h2>Ingredients</h2>
            <label>Ingredient</label>
            <select>
              <option>Chicken</option>
              <option>Rice</option>
              <option>Bread</option>
            </select>
            <label>Quantity</label>
            <input type="number" value="0.5" />
            <button>Delete</button>
          </div>
        </form>
        <button>Add more ingrediants</button>
        <button>Delete meal</button>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

export default EditMeal
