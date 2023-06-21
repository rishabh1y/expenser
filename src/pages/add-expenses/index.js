import React from 'react'
import TopFold from '../../components/topfold'
import "./add-expense.css"
import AddForm from '../../components/add-form'

function AddExpense() {
  return (
    <div className='add-expense'>
      <TopFold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense
