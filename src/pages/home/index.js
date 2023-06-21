import React from 'react'
import './home.css'
import TopFold from '../../components/topfold'
import ExpenseList from '../../components/expense-list'

function index() {
  return (
    <div className='home'>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
}

export default index
