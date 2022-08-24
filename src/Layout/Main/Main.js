import React from 'react';
import AppRouter from "../../components/router/AppRouter";
import Footer from "../Footer/Footer";
import Header from "../Header";

function Main() {
	return (
		<div>
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
}

export default Main;