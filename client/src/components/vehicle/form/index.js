import React, { PureComponent } from 'react'

import VehicleForm from './form'
import * as VehicleAPI from '../../../api/vehicles'
import { getErrorMessages } from '../../../utils/helpers'

const initialState = {
  id: null,
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

  componentDidMount () {
    const { id } = this.props.match.params
    if (id) {
      this.setState({ isLoading: true, id })
      VehicleAPI.get(id)
        .then(response => {
          const { data } = response.data
          this.setState({
            vehicle: data.vehicle,
            brand: data.brand,
            year: data.year,
            description: data.description,
            sold: !!Number(data.sold),
            isLoading: false
          })
        })
        .catch(error => {
          if (error.response.status === 404) {
            this.setState({
              errorMessages: ['Vehicle not found.'],
              isLoading: false
            })
            return
          }
          this.setState({
            isLoading: false
          })
        })
    }
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
    if (this.state.id) {
      this.update()
      return
    }
    this.create()
  }

  create = () => {
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

  update = () => {
    VehicleAPI.update(this.state.id, this.state)
      .then(response => {
        this.setState({
          isLoading: false,
          successMessage: 'Vehicle successfully updated.'
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
