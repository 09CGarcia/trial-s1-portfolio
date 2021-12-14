import React from 'react'

import { Jumbotron, Button } from 'react-bootstrap'

export default function Jumbo(){
	return(
		<Jumbotron>
			<h1>Hello World!</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic reprehenderit soluta architecto, vero accusamus nesciunt, enim nostrum labore explicabo porro, aliquam ipsa aperiam ipsam assumenda repudiandae blanditiis numquam quam?</p>
			<Button variant = "primary">Learn More</Button>
		</Jumbotron>


	)
}