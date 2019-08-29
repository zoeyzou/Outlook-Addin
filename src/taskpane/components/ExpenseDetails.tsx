import * as React from 'react'
import { categoryOptions, Category } from '../helpers/expenses'
import { Stack, Dropdown, Icon, TextField, Spinner, Image, ImageFit } from 'office-ui-fabric-react'

interface Props {
  selectedCategory?: Category
  note?: string
}

interface State {
  isLoading: boolean
  loaded: boolean
}

export default class ExpenseDetails extends React.Component<Props, State> {
  state: State = {
    isLoading: false,
    loaded: false,
  }

  uploadAttachment = () => {
    this.setState({ isLoading: true }, () => {
      setTimeout(() => this.setState({ isLoading: false, loaded: true }), 3000)
    })
  }

  render() {
    const { selectedCategory, note } = this.props
    const { isLoading, loaded } = this.state

    return (
      <Stack tokens={{ childrenGap: 15, padding: 20 }}>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="AllApps"
            title="Category"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <Dropdown
            selectedKey={selectedCategory}
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
          <TextField
            multiline
            styles={{ root: { width: '100%' } }}
            placeholder={'Leave a note'}
            value={note}
          />
        </Stack.Item>
        <Stack.Item styles={{ root: { display: 'flex', width: '100%' } }}>
          <Icon
            iconName="Attach"
            title="File"
            styles={{ root: { fontSize: '20px', margin: '0 5px' } }}
          />
          <div className={`attachmentWrapper ${!loaded && 'enabled'}`}>
            {!isLoading && !loaded && (
              <Icon
                iconName="Add"
                styles={{ root: { fontSize: '30px', color: 'navy' } }}
                onClick={this.uploadAttachment}
              />
            )}
            {isLoading && <Spinner />}
            {!isLoading && loaded && (
              <Image
                src={'assets/pdf_thumbnail.jpg'}
                width="100%"
                height="160px"
                imageFit={ImageFit.centerContain}
              />
            )}
          </div>
        </Stack.Item>
      </Stack>
    )
  }
}
