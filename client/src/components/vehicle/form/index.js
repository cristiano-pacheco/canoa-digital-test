import React, { PureComponent } from 'react'

import VehicleForm from './form'
import * as VehicleAPI from '../../../api/vehicles'
import { getErrorMessages } from '../../../utils/helpers'

const initialState = {
  isLoading: false,
  vehicle: '',
  brand: '',
  year: '',
  description: '',
  sold: 0,
  successMessage: '',
  errorMessages: []
}

class VehicleFormContainer extends PureComponent {
  constructor () {
    super()
    this.state = initialState
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckBoxChange = e => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleSubmit = () => {
    this.setState({
      isLoading: true,
      errorMessages: [],
      successMessage: ''
    })
    VehicleAPI.create(this.state)
      .then(response => {
        this.setState({
          ...initialState,
          successMessage: 'Vehicle successfully registered.'
        })
      })
      .catch(error => {
        if (error.response.status === 422) {
          const errorMessages = getErrorMessages(error.response.data.errors)
          return this.setState({ errorMessages, isLoading: false })
        }
        this.setState({ isLoading: false })
      })
  }

  render () {
    return (
      <VehicleForm
        {...this.state}
        handleInputChange={this.handleInputChange}
        handleCheckBoxChange={this.handleCheckBoxChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default VehicleFormContainer
