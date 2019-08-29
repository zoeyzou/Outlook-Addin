import * as React from 'react'
import { Button, ButtonType, TextField, Stack } from 'office-ui-fabric-react'

interface Props {
  email: string
  password: string
  inputHandler: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => void
  formHandler: () => void
}

export default class LoginForm extends React.Component<Props> {
  render() {
    const { email, password, inputHandler, formHandler } = this.props
    return (
      <Stack tokens={{ childrenGap: 10, padding: 20 }}>
        <TextField
          label="Your Email"
          iconProps={{ iconName: 'Mail' }}
          value={email}
          name="email"
          onChange={inputHandler}
          type="email"
        />
        <TextField
          label="Your password"
          iconProps={{ iconName: 'Lock' }}
          value={password}
          name="password"
          onChange={inputHandler}
          type="password"
        />

        <Button
          className="ms-welcome__action"
          buttonType={ButtonType.default}
          onClick={formHandler}
          iconProps={{ iconName: 'ChevronRight' }}
          style={{ borderRadius: '22px', marginTop: '40px' }}
          disabled={!email || !password}
        >
          Login
        </Button>
      </Stack>
    )
  }
}
