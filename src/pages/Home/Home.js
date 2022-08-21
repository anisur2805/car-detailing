import React from 'react';
import Blog from "../../components/Blog/Blog";
import Services from '../../components/Services/Services';
import Footer from '../../Layout/Footer/Footer';

export default function Home() {
	return (
		<>
			<Blog />
			<Services />
			<Footer />
		</>
	);
}
