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
				Logged in: {auth.authenticated ? 'True' : 'False'}{' '}
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
							type: 'LOGIN',
							payload: { user: 'Thomas', authenticated: true },
						})
					}
					variant="contained"
					color="primary"
				>
					LOG IN
				</Button>

				<Button
					onClick={() =>
						dispatch({
							type: 'LOGOUT',
							payload: { user: null, authenticated: false },
						})
					}
					variant="contained"
					color="primary"
				>
					LOG OUT
				</Button>
			</Card>
		</Container>
	);
}
