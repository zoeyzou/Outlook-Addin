import * as React from 'react'
import { teamOptions, categoryOptions } from '../helpers/expenses'
import { Stack, Dropdown, Icon, TextField, IconButton } from 'office-ui-fabric-react'

interface Props {}

export default class ExpenseDetails extends React.Component<Props> {
  render() {
    return (
      <Stack tokens={{ childrenGap: 10, padding: 20 }}>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="People"
            title="People"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <Dropdown
            options={teamOptions}
            styles={{ root: { width: '100%' } }}
            placeHolder={'Choose a team'}
          />
        </Stack.Item>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="AllApps"
            title="Category"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <Dropdown
            options={categoryOptions}
            styles={{ root: { width: '100%' } }}
            placeHolder={'Choose a category'}
          />
        </Stack.Item>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="Handwriting"
            title="Notes"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <TextField multiline styles={{ root: { width: '100%' } }} placeholder={'Leave a note'} />
        </Stack.Item>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="Attach"
            title="File"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <IconButton
            iconProps={{ iconName: 'Add', styles: { root: { fontSize: '30px' } } }}
            styles={{ root: { width: '100%', height: '80px', border: '1px dashed' } }}
          />
        </Stack.Item>
      </Stack>
    )
  }
}
