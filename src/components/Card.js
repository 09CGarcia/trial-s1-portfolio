import React from 'react'

import { Card, Button } from 'react-bootstrap'

export default function CardComponent() {
	return (
		<Card>
			<Card.Body>
				<Card.Title>This is a Card Title</Card.Title>
				<Card.Text>
					<p>
					Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Rerum illum accusamus repellat beatae est, in quaerat earum, aliquid ducimus commodi eaque omnis ullam quo eos quis sapiente corrupti maxime obcaecati.
					</p>
				</Card.Text>
				<Button variant = "success">Go Somewhere</Button>
			</Card.Body>
		</Card>

	)
}