import React, { useState } from 'react'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem,
    NavLink } from 'reactstrap'

const NavBar = props => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)
    const logout = () => {
        localStorage.clear('token')
        props.history.push('/')
    }

    return (        
        <Navbar className='nav-bar' color='dark' dark>
            <NavbarBrand className='logo mr-auto' onClick={() =>
                props.history.push('/friends')}>
                F{' '}<span>•</span>{' '}R{' '}<span>•</span>
                {' '}I{' '}<span>•</span>{' '}E{' '}<span>•</span>
                {' '}N{' '}<span>•</span>{' '}D{' '}<span>•</span>{' '}S
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        {localStorage.getItem('token') ? (
                            <NavLink href='#' onClick={() => {
                                logout()
                                toggleNavbar()
                            }}>
                                Log Out
                            </NavLink>
                        ) : (
                            <NavLink href='#' onClick={() => {
                                props.history.push('/')
                                toggleNavbar()
                            }}>
                                Log In
                            </NavLink>
                        )}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar