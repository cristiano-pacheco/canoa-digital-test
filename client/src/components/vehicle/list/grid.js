import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Header, Segment, Button, Icon } from 'semantic-ui-react'

const VehicleGrid = ({ isLoading, vehicles, handleRemove }) => (
  <div>
    <Header as='h2' attached='top'>
      Vehicles List
      <Link to='/add'>
        <Button primary floated='right'>Add</Button>
      </Link>
    </Header>
    <Segment attached loading={isLoading}>
      <Table compact celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>ID</Table.HeaderCell>
            <Table.HeaderCell>Vehicles</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign='center'>Sold</Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign='center' />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {vehicles.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                <Link to={`/edit/${item.id}`}>{item.vehicle}</Link>
              </Table.Cell>
              <Table.Cell>{item.brand}</Table.Cell>
              <Table.Cell textAlign='center'>{item.sold === '1' ? 'Yes' : 'No' }</Table.Cell>
              <Table.Cell textAlign='center'>
                <Icon
                  data-js='btn-delete-post'
                  color='red'
                  size='large'
                  name='trash'
                  className='btn-pointer'
                  onClick={() => handleRemove(item.id)}
                  style={{ cursor: 'pointer' }}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  </div>
)

VehicleGrid.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  vehicles: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default VehicleGrid
