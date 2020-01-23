import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Select from "../../components/select"

const data = {
  categories: ["Choose one", "Oriental", "Western", "Arabian"],
  allIngredients: ["Chicken", "Rice", "Bread", "Salt", "Maccaroni", "Meat"],
}

const NewMeal = props => {
  return (
    <Layout>
      <div>
        <h1>Add New Meal</h1>
        <Form />
        <button>Add more ingrediants</button>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

const Form = props => (
  <form>
    <label>Meal name</label>
    <input />
    <label>أسم الوجبه</label>
    <input />
    <Select label="Meal Category" options={data.categories} />
    <h2>Ingredients</h2>
    <div>
      <Select label="Ingredient" options={data.allIngredients} />
      <label>Quantity</label>
      <input type="number" min="0" />
    </div>
  </form>
)

export default NewMeal
