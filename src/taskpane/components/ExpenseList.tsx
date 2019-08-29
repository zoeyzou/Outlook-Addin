import * as React from 'react'
import { Expense } from '../helpers/expenses'
import { List } from 'office-ui-fabric-react'
import ExpenselistItem from './ExpenseListItem'

interface Props {
  expenseList?: Expense[]
}

export default class ExpenseList extends React.Component<Props> {
  render() {
    const { expenseList } = this.props
    if (!expenseList) {
      return <h4 style={{ margin: '20px' }}>"Great, there's no expense that misses Receipt!"</h4>
    }

    return (
      <List
        items={expenseList}
        onRenderCell={(expense: Expense, index: number) => (
          <ExpenselistItem expense={expense} index={index} />
        )}
      />
    )
  }
}
