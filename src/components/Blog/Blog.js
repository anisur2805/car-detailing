import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Blog.scss';
import blog1 from '../../assets/static-images/pc.jpg';
import blog2 from '../../assets/static-images/2.b275a56b.jpg';
const blogPosts = [
	{
		"id": 1,
		"date": "20 December 2020",
		"author": "admin",
		"title": "Majority of students dissatisfied for world coronavirus support",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "University",
		"img": blog1
	},
	{
		"id": 2,
		"date": "20 December 2020",
		"author": "admin",
		"title": "Majority of students dissatisfied for world coronavirus support",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "University",
		"img": blog2
	},
	{
		"id": 3,
		"date": "20 December 2020",
		"author": "admin",
		"title": "Majority of students dissatisfied for world coronavirus support",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "University",
		"img": blog1
	},
	{
		"id": 4,
		"date": "20 December 2020",
		"author": "admin",
		"title": "Majority of students dissatisfied for world coronavirus support",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "University",
		"img": blog2
	}];
const Blog = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
	};

	const blogItem = blogPosts.map(item => (
		<div className="slick-list" key={item.id}>
			<div className="slick-track">
				<div className="blog-item">
					<div className="image-part"><a href="/blog/single-post-right-sidebar">
						<img src={item.img} alt="Majority of students dissatisfied for world coronavirus support" /></a>
					</div>
					<div className="blog-content">
						<ul className="blog-meta">
							<li className="date"><i className="fa fa-calendar-check-o"></i> {item.date}
							</li>
							<li className="admin"><i className="fa fa-user-o"></i> {item.author}</li>
						</ul>
						<h3 className="title"><a href="/blog/single-post-right-sidebar">{item.title}</a></h3>
						<div className="desc">`${item.content}...`</div>
						<div className="btn-btm">
							<div className="cat-list">
								<ul className="post-categories">
									<li><a href="/blog">{item.categories}</a></li>
								</ul>
							</div>
							<div className="rs-view-btn"><a href="/blog/single-post-right-sidebar">Read
								More</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className="rs-blog main-home pb-100 pt-100 md-pt-70 md-pb-70">
			<div className="container">
				<div className="sec-title3 text-center mb-50 aos-init">
					<div className="sub-title">News Update</div>
					<h2 className="title">Latest News &amp; events</h2>
				</div>
				<Slider {...settings}>

					{blogItem && blogItem}

				</Slider>
			</div>
		</div>
	);
}

export default Blog;