import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Select from "../../components/select"

const data = {
  mealNameEn: "Chicken roll",
  mealNameAr: "ملفوف دجاج",
  mealCategory: "Western",
  categories: ["Western", "Arabian", "Oriental"],
  ingredients: [
    {
      name: "Chicken",
      quantity: "0.5",
      unit: "pcs",
    },
    {
      name: "Rice",
      quantity: "100",
      unit: "gm",
    },
    {
      name: "Bread",
      quantity: "1",
      unit: "pcs",
    },
  ],
  allIngredients: ["Chicken", "Rice", "Bread", "Salt", "Maccaroni", "Meat"],
}

const EditMeal = props => {
  return (
    <Layout>
      <div>
        <h1>Edit Meal</h1>
        <Form data={data} />
        <button>Add more ingrediants</button>
        <button>Delete meal</button>
        <Link to="/menu/all">Menu</Link>
      </div>
    </Layout>
  )
}

const Form = props => (
  <form>
    <label>Meal name</label>
    <input value={props.data.mealNameEn} />
    <label>اسم الوجبة</label>
    <input value={props.data.mealNameAr} />
    <Select
      label="Meal Category"
      options={props.data.categories}
      selected={props.data.mealCategory}
    />
    <div>
      <h2>Ingredients</h2>
      {props.data.ingredients.map(ingredient => (
        <div>
          <Select
            label="Ingredient"
            options={props.data.allIngredients}
            selected={ingredient.name}
          />
          <label>Quantity</label>
          <input type="number" value={ingredient.quantity} min="0" />
          <span>{ingredient.unit}</span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  </form>
)

export default EditMeal
