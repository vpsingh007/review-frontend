import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { APP_NAME } from '../../config'
import { signout, isAuth } from '../actions/auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import 'nprogress/nprogress.css'

Router.onRouteChangeStart = (url) => NProgress.start()
Router.onRouteChangeComplete = (url) => NProgress.done()
Router.onRouteChangeError = (url) => NProgress.done()

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Logo
          </a>
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
    </React.Fragment>
  )
}

export default Header
