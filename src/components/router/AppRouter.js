import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Blog from "../Blog/Blog";
const Details = () => <h1>Hello</h1>;

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/details' element={<Details />} />
			<Route path='/blog' element={<Blog />} />
		</Routes>
	);
};

export default AppRouter;