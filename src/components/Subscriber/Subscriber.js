import { Field, Form, Formik } from 'formik';
import React from 'react';
import './Subscriber.scss';

function Subscriber() {
	return (
		<div className='cd__form cd__subscriber_form'>
			<Formik
				initialValues={{
					email: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<Field
						id="email"
						name="email"
						placeholder="jane@acme.com"
						type="email"
					/>
					<button type="submit">

					</button>
				</Form>
			</Formik>
		</div>
	);
}

export default Subscriber;