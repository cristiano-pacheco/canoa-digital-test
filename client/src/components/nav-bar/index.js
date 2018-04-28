import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'

const NavBar = () => (
  <div>
    <Menu fixed='top' color='blue' inverted>
      <Container>
        <Menu.Item as={Link} to='/'>
          Canoa Digital
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default NavBar
