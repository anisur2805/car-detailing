import React from 'react';
import Blog from "../../components/Blog/Blog";
import Map from "../../components/Map/Map";
import Services from '../../components/Services/Services';

export default function Home() {
	return (
		<>
			<Map />
			<Blog />
			<Services  />
		</>
	);
}
