import React from 'react'
import Helmet from 'react-helmet'

const Index = () => {
	return (
		<main>
			<Helmet
				title="Reactiflux"
				meta={[
					{
						name: 'description',
						content:
							'Anonymously contact a Reactiflux administrator',
					},
				]}
			/>
			<h1>Message the staff</h1>
			<form
				onSubmit={e => {
					e.preventDefault()
					console.log('submit')
				}}
			>
				<label>
					Your message
					<input type="textbox" />
				</label>

				<button primary>Send message</button>
			</form>
		</main>
	)
}

export default Index
