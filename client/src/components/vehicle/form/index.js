import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Form, Header, Segment, Button, Checkbox, Icon } from 'semantic-ui-react'

import If from '../../common/if'
import ErrorMessage from '../../common/error-message'
import SuccessMessage from '../../common/success-message'

class VehicleForm extends PureComponent {
  constructor () {
    super()
    this.state = {
      isLoading: false,
      vehicle: '',
      brand: '',
      year: '',
      description: '',
      sold: '',
      successMessage: '',
      errorMessages: []
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {

  }

  render () {
    const { isLoading, vehicle, brand, year, description, errorMessages, successMessage } = this.state
    return (
      <div>
        <Header as='h2' attached='top'>
          Vehicles Form
          <Link to='/'>
            <Button primary floated='right'>List</Button>
          </Link>
        </Header>
        <Segment attached>
          <Form
            onSubmit={this.handleSubmit}
            loading={isLoading}
            autoComplete='off'
          >
            <Form.Input
              name='vehicle'
              label='Vehicle'
              width={16}
              onChange={this.handleInputChange}
              value={vehicle}
            />
            <Form.Input
              name='brand'
              label='Brand'
              width={16}
              onChange={this.handleInputChange}
              value={brand}
            />
            <Form.TextArea
              name='description'
              label='Description'
              rows={4}
              width={16}
              onChange={this.handleInputChange}
              value={description}
            />
            <Form.Input
              name='year'
              label='Year'
              width={4}
              onChange={this.handleInputChange}
              value={year}
            />
            <Form.Field>
              <Checkbox name='sold' label='Sold' />
            </Form.Field>
            <Button type='submit' disabled={isLoading} primary icon>
              <Icon name='save' /> Save
            </Button>
          </Form>
          <If test={!!errorMessages.length}>
            <ErrorMessage errorMessages={errorMessages} />
          </If>
          <If test={!!successMessage.length}>
            <SuccessMessage message={successMessage} />
          </If>
        </Segment>
      </div>
    )
  }
}

export default VehicleForm
