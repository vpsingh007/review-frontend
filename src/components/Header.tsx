import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
// import { APP_NAME } from '../../config';
import { signout, isAuth } from '../services/auth'

// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap'
import { NavItem, NavLink } from 'reactstrap'
import 'nprogress/nprogress.css'

// Router.onRouteChangeStart = (url) => NProgress.start()
// Router.onRouteChangeComplete = (url) => NProgress.done()
// Router.onRouteChangeError = (url) => NProgress.done()
if (typeof window !== 'undefined') {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
}

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div>
          <Link className="navbar-brand" href="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarText1">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <Link href="/blogs">
                  <NavLink>Residential Appartment</NavLink>
                </Link>
              </NavItem>
              <span>|</span>
              <NavItem>
                <Link href="/contact">
                  <NavLink>Independent/Builder Floor</NavLink>
                </Link>
              </NavItem>
              <span>|</span>
              <NavItem>
                <Link href="/contact">
                  <NavLink>Residential Land</NavLink>
                </Link>
              </NavItem>
              </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto1 mb-2 mb-lg-0">
              <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink>Blogs</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink>Signup</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}
              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}
  
              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}
  
              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: 'pointer' }}
                    onClick={() => signout(() => Router.replace(`/signin`))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </React.Fragment>
  )
}

export default Header
