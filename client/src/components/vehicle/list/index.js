import React, { PureComponent } from 'react'

import * as VehicleAPI from '../../../api/vehicles'
import VehicleGrid from './grid'

class VehicleList extends PureComponent {
  constructor () {
    super()
    this.state = {
      vehicles: [],
      isLoading: false
    }
  }

  componentDidMount () {
    this.fetchVehicles()
  }

  fetchVehicles = () => {
    this.setState({ isLoading: true })
    VehicleAPI.getAll()
      .then(response => {
        this.setState({
          vehicles: response.data.data,
          isLoading: false
        })
      })
      .catch(response => {
        console.log(response)
        this.setState({ isLoading: false })
      })
  }

  handleRemove = id => {
    this.setState({ isLoading: true })
    VehicleAPI.remove(id)
      .then(response => {
        this.setState({ isLoading: false })
        this.fetchVehicles()
      })
      .catch(error => {
        console.log(error)
        this.setState({ isLoading: false })
      })
  }

  render () {
    return (
      <VehicleGrid
        isLoading={this.state.isLoading}
        vehicles={this.state.vehicles}
        handleRemove={this.handleRemove}
      />
    )
  }
}

export default VehicleList
