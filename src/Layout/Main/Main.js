import React from 'react';
import AppRouter from "../../components/router/AppRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";

function Main() {
	return (
		<div>
			<Header />
			<div>
				<AppRouter  />
			</div>
			<Footer />
		</div>
	);
}

export default Main;