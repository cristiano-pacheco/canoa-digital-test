import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { Table, Header, Segment, Button } from 'semantic-ui-react'

class VehicleList extends PureComponent {
  constructor () {
    super()
    this.state = {
      vehicles: []
    }
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
        <Segment attached>
          <Table compact celled selectable>
            <Table.Header>
              <Table.HeaderCell width={1}>ID</Table.HeaderCell>
              <Table.HeaderCell>Vehicles</Table.HeaderCell>
              <Table.HeaderCell>Brand</Table.HeaderCell>
              <Table.HeaderCell width={1} textAlign='center'>Sold</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>
                  <a href=''>Cruze</a>
                </Table.Cell>
                <Table.Cell>Chevrolet</Table.Cell>
                <Table.Cell textAlign='center'>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>
                  <a href=''>Camaro</a>
                </Table.Cell>
                <Table.Cell>Chevrolet</Table.Cell>
                <Table.Cell textAlign='center'>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>
                  <a href=''>Onix</a>
                </Table.Cell>
                <Table.Cell>Chevrolet</Table.Cell>
                <Table.Cell textAlign='center'>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}

export default VehicleList
