import React, { PureComponent } from 'react'

import Form from './form'

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
    return (
      <Form
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default VehicleForm
