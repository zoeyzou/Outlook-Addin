import * as React from 'react'
import ExpenseDetails from './ExpenseDetails'
import { Expense } from '../helpers/expenses'

interface Props {
  expense: Expense
  index: number
}

interface State {
  collapsed: boolean
}

export default class ExpenselistItem extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))
  }

  render() {
    const { expense } = this.props
    const { collapsed } = this.state

    return (
      <>
        <div className="listItemWrapper" onClick={this.toggleCollapsed}>
          <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'flex-start' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px',
                marginRight: '15px',
                borderRadius: '20px',
                color: 'white',
                backgroundColor: getRandomColor(),
              }}
            >
              {expense.merchant[0]}
            </div>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
              <h5>{expense.merchant}</h5>
              <p style={{ marginBottom: 0 }}>{expense.employee}</p>
            </div>
          </div>
          <div>
            {expense.amount.value.toFixed(2)} {expense.amount.currency}
          </div>
        </div>
        {collapsed && <ExpenseDetails />}
      </>
    )
  }
}

function getRandomColor() {
  const h = Math.floor(Math.random() * 360)
  const s = Math.floor(Math.random() * 100)
  const l = Math.floor(Math.random() * 100)
  return `hsl(${h}, ${s}%, ${l}%)`
}
