import React from 'react'

import { Navbar, Nav } from 'react-bootstrap' 

export default function NavbarComponent(){
	return(
		<Navbar bg = "primary" expand = "lg">
		<Navbar.Brand href = "#home">React-Bootstrap</Navbar.Brand>
			<Nav className = "mr-auto">
				<Nav.Link className = "text-light"href = "#home">Home</Nav.Link>
				<Nav.Link className = "text-light" href = "#link">Link</Nav.Link>
			</Nav>
		</Navbar>
	)
}