import React from "react"

const EditIngredient = props => {
  return (
    <div>
      <h1>Edit Ingredient</h1>
      <form>
        <label>Ingredient name</label>
        <input value="Chicken roll" />
        <label>أسم المكون</label>
        <input value="ملفوف دجاج" />
        <label>Ingredient price</label>
        <input value="SAR 10.00" />
      </form>
    </div>
  )
}

export default EditIngredient
