import * as React from 'react'
import { Spinner, SpinnerType } from 'office-ui-fabric-react'

export interface ProgressProps {
  message: string
}

export default class Progress extends React.Component<ProgressProps> {
  render() {
    const { message } = this.props

    return <Spinner type={SpinnerType.large} label={message} style={{ marginTop: '20px' }} />
  }
}
