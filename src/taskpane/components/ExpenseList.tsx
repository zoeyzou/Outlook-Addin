import * as React from 'react'
import { Expense } from '../helpers/expenses'
import { List } from 'office-ui-fabric-react'

interface Props {
  expenseList?: Expense[]
}

export default class ExpenseList extends React.Component<Props> {
  render() {
    const { expenseList } = this.props
    if (!expenseList) {
      return <h4 style={{ padding: '20px' }}>"Great, there's no expense that misses Receipt!"</h4>
    }

    return <List items={expenseList} onRenderCell={this.getExpenseItem} />
  }

  private getExpenseItem = (expense: Expense) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
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
            <p>{expense.employee}</p>
          </div>
        </div>
        <div>
          {expense.amount.value.toFixed(2)} {expense.amount.currency}
        </div>
      </div>
    )
  }
}

function getRandomColor() {
  const h = Math.floor(Math.random() * 360)
  const s = Math.floor(Math.random() * 100)
  const l = Math.floor(Math.random() * 100)
  return `hsl(${h}, ${s}%, ${l}%)`
}
