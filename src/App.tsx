import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Card, Typography } from '@material-ui/core';

export default function App() {
	const counter = useSelector((state: any) => state.counter);
	const auth = useSelector((state: any) => state.auth);
	const dispatch = useDispatch();

	return (
		<Container component="main" maxWidth="xs">
			<Typography paragraph variant="h4">
				Counter: {counter}
			</Typography>
			<Typography paragraph variant="h4">
				Auth: {auth.authenticated ? 'Logged in' : 'Please, log in'}
			</Typography>
			<Card>
				<Button
					onClick={() => dispatch({ type: 'INCREMENT' })}
					variant="contained"
					color="primary"
				>
					INCREMENT
				</Button>
				<Button
					onClick={() => dispatch({ type: 'DECREMENT' })}
					variant="contained"
					color="primary"
				>
					DECREMENT
				</Button>

				<Button
					onClick={() =>
						dispatch({
							type: !auth.authenticated ? 'LOGIN' : 'LOGOUT',
							payload: {
								user: !auth.authenticated ? null : 'Thomas',
								authenticated: !auth.authenticated,
							},
						})
					}
					variant="contained"
					color="primary"
				>
					{!auth.authenticated ? 'LOG IN' : 'LOG OUT'}
				</Button>
			</Card>
		</Container>
	);
}
