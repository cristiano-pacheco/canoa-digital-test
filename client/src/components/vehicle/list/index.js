import React, { PureComponent } from 'react'
import { Pagination } from 'semantic-ui-react'

import * as VehicleAPI from '../../../api/vehicles'
import VehicleGrid from './grid'

class VehicleList extends PureComponent {
  constructor () {
    super()
    this.state = {
      vehicles: [],
      isLoading: false,
      totalPages: 1,
      activePage: 1
    }
  }

  componentDidMount () {
    this.fetchVehicles()
  }

  fetchVehicles = page => {
    this.setState({ isLoading: true })
    VehicleAPI.getAll(page)
      .then(response => {
        this.setState({
          vehicles: response.data.data,
          totalPages: response.data.last_page,
          activePage: response.data.current_page,
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

  handlePageChange = (e, { activePage }) => {
    this.setState({ activePage })
    this.fetchVehicles(activePage)
  }

  render () {
    return (
      <React.Fragment>
        <VehicleGrid
          isLoading={this.state.isLoading}
          vehicles={this.state.vehicles}
          handleRemove={this.handleRemove}
        />
        <br />
        <div style={{ textAlign: 'center' }}>
          <Pagination
            activePage={this.state.activePage}
            totalPages={this.state.totalPages}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default VehicleList
