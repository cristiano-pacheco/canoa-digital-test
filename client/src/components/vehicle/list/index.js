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

  render () {
    return (
      <VehicleGrid
        isLoading={this.state.isLoading}
        vehicles={this.state.vehicles}
      />
    )
  }
}

export default VehicleList
