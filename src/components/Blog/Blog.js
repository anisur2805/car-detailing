import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Blog.scss';
import blog1 from '../../assets/static-images/pc.jpg';
import blog2 from '../../assets/static-images/2.b275a56b.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
const blogPosts = [
	{
		"id": 1,
		"date": "22 December 2020",
		"author": "admin",
		"title": "University class starting soon while the lovely valley team",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "University",
		"img": blog1
	},
	{
		"id": 2,
		"date": "20 December 2020",
		"author": "admin",
		"title": "How universities can nurture for the world climate crisis",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "Primary",
		"img": blog2
	},
	{
		"id": 3,
		"date": "20 December 2020",
		"author": "admin",
		"title": "Majority of students dissatisfied for world coronavirus support",
		"content": "We denounce with righteous indige nation and dislike men who are so beguiled",
		"categories": "School",
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
		autoplay: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
				breakpoint: 767,
				settings: {
				  slidesToShow: 1,
				}
			  }
		]
	};

	const blogItem = blogPosts.map(item => (
		<div key={item.id}>
			<div className="slick-track">
				<div className="blog-item">
					<div className="image-part"><a href="/blog/single-post-right-sidebar">
						<img src={item.img} alt="Majority of students dissatisfied for world coronavirus support" /></a>
					</div>
					<div className="blog-content">
						<ul className="blog-meta">
							<li className="date">
								<FontAwesomeIcon icon={faCalendar} />
								{item.date}
							</li>
							<li className="admin">
							<FontAwesomeIcon icon={faUser} />
							{item.author}</li>
						</ul>
						<h3 className="title"><a href="/blog/single-post-right-sidebar">{item.title}</a></h3>
						<div className="desc">{item.content}...</div>
						<div className="btn-btm">
							<div className="cat-list">
								<ul className="post-categories">
									<li><a href="/blog">
									<FontAwesomeIcon icon={faBook} />
									{item.categories}</a></li>
								</ul>
							</div>
							<div className="cd__view_btn"><a href="/blog/single-post-right-sidebar">Read
								More <FontAwesomeIcon icon={faArrowRight} /> </a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<div className="cd__blog pb-100 pt-100 md-pt-70 md-pb-70">
			<div className="container">
				<div className="sec-title3 text-center mb-50 aos-init">
					<div className="sub-title">News Update</div>
					<h3 className="title mb-title-space">Latest News &amp; events</h3>
				</div>
				<Slider {...settings}>

					{blogItem && blogItem}

				</Slider>
			</div>
		</div>
	);
}

export default Blog;