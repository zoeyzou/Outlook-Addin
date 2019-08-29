import * as React from 'react'
import Header from './Header'
import Progress from './Progress'
import LoginForm from './LoginForm'
import ExpenseList from './ExpenseList'
import { Expense, expenseList } from '../helpers/expenses'

export interface AppProps {
  title: string
  isOfficeInitialized: boolean
}

export interface AppState {
  email: string
  password: string
  loading: boolean
  isLoggedIn: boolean
  expenseList: Expense[] | null
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      loading: false,
      isLoggedIn: false,
      expenseList: null,
    }
  }

  inputHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (event.currentTarget.name === 'email') {
      this.setState({ email: newValue })
    } else {
      this.setState({ password: newValue })
    }
  }

  onSubmit = async () => {
    this.setState({ loading: true })
    setTimeout(() => this.setState({ loading: false, isLoggedIn: true }), 3000)
  }

  render() {
    const { isOfficeInitialized } = this.props
    const { email, password, loading, isLoggedIn } = this.state

    if (!isOfficeInitialized || loading) {
      return (
        <div className="ms-welcome">
          <Header
            logo="assets/logo-filled.png"
            title={this.props.title}
            message={isLoggedIn ? `Howdy, Zoey` : 'Welcome'}
          />
          <Progress message="Patiently wait for the expenses to come in" />
        </div>
      )
    }

    return (
      <div className="ms-welcome">
        <Header
          logo="assets/logo-filled.png"
          title={this.props.title}
          message={isLoggedIn ? `Howdy, Zoey` : 'Welcome'}
        />
        {!isLoggedIn ? (
          <LoginForm
            email={email}
            password={password}
            inputHandler={this.inputHandler}
            formHandler={this.onSubmit}
          />
        ) : (
          <ExpenseList expenseList={expenseList.filter(expense => expense.employee === 'Zoey')} />
        )}
      </div>
    )
  }
}
