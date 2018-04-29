import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Table, Header, Segment, Button } from 'semantic-ui-react'

import * as VehicleAPI from '../../../api/vehicles'

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
    VehicleAPI.getVehicles()
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
      <div>
        <Header as='h2' attached='top'>
          Vehicles List
          <Link to='/add'>
            <Button primary floated='right'>Add</Button>
          </Link>
        </Header>
        <Segment attached loading={this.state.isLoading}>
          <Table compact celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={1}>ID</Table.HeaderCell>
                <Table.HeaderCell>Vehicles</Table.HeaderCell>
                <Table.HeaderCell>Brand</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='center'>Sold</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.vehicles.map(item => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>
                    <a href=''>{item.vehicle}</a>
                  </Table.Cell>
                  <Table.Cell>{item.brand}</Table.Cell>
                  <Table.Cell textAlign='center'>{item.sold === '1' ? 'Yes' : 'No' }</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}

export default VehicleList
