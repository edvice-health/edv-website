import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bulma-components/lib/components/navbar'

import Logo from '../components/Logo'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <Navbar fixed='top' active={this.state.open}>
        <Navbar.Brand>
          <Logo/>
          <Navbar.Burger
            active={this.state.open}
            onClick={() => this.setState(state => ({ open: !state.open }))}
          >
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item className='is-uppercase font-title' href="#story">Story</Navbar.Item>
            <Navbar.Item className='is-uppercase font-title' href="#">Blog</Navbar.Item>
            <Navbar.Item className='is-uppercase font-title' href="#">Program</Navbar.Item>
            <Navbar.Item className='is-uppercase font-title' href="#">Contact</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Header
