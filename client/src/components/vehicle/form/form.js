import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Form,
  Header,
  Segment,
  Button,
  Icon
} from 'semantic-ui-react'

import If from '../../common/if'
import ErrorMessage from '../../common/error-message'
import SuccessMessage from '../../common/success-message'

const VehicleForm = ({
  vehicle,
  brand,
  description,
  year,
  sold,
  errorMessages,
  successMessage,
  handleSubmit,
  isLoading,
  handleInputChange,
  handleCheckBoxChange
}) => (
  <div>
    <Header as='h2' attached='top'>
      Vehicles Form
      <Link to='/'>
        <Button primary floated='right'>List</Button>
      </Link>
    </Header>
    <Segment attached>
      <Form
        onSubmit={handleSubmit}
        loading={isLoading}
        autoComplete='off'
      >
        <Form.Input
          name='vehicle'
          label='Vehicle'
          width={16}
          onChange={handleInputChange}
          value={vehicle}
        />
        <Form.Input
          name='brand'
          label='Brand'
          width={16}
          onChange={handleInputChange}
          value={brand}
        />
        <Form.TextArea
          name='description'
          label='Description'
          rows={4}
          width={16}
          onChange={handleInputChange}
          value={description}
        />
        <Form.Input
          name='year'
          label='Year'
          width={4}
          onChange={handleInputChange}
          value={year}
        />

        <Form.Field
          name='sold'
          value={sold}
          checked={sold}
          label='Sold'
          control='input'
          type='checkbox'
          onChange={handleCheckBoxChange}
        />

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

VehicleForm.propTypes = {
  vehicle: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  sold: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  errorMessages: PropTypes.array.isRequired,
  successMessage: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckBoxChange: PropTypes.func.isRequired
}

export default VehicleForm
