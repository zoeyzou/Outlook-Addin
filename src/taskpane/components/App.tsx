import * as React from 'react'
import { Button, ButtonType, TextField, Stack } from 'office-ui-fabric-react'
import Header from './Header'
import Progress from './Progress'

export interface AppProps {
  title: string
  isOfficeInitialized: boolean
}

export interface AppState {
  email: string
  password: string
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
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

  click = async () => {
    console.log('something happened')
  }

  render() {
    const { title, isOfficeInitialized } = this.props

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo="assets/logo-filled.png"
          message="Please sideload your addin to see app body."
        />
      )
    }

    return (
      <div className="ms-welcome">
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <Stack tokens={{ childrenGap: 10, padding: 20 }}>
          <TextField
            label="Your Email"
            iconProps={{ iconName: 'Mail' }}
            value={this.state.email}
            name="email"
            onChange={this.inputHandler}
          />
          <TextField
            label="Your password"
            iconProps={{ iconName: 'Lock' }}
            value={this.state.password}
            name="password"
            onChange={this.inputHandler}
          />

          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.default}
            iconProps={{ iconName: 'ChevronRight' }}
            onClick={this.click}
            style={{ borderRadius: '22px', marginTop: '40px' }}
          >
            Login
          </Button>
        </Stack>
        {/* </HeroList> */}
      </div>
    )
  }
}
