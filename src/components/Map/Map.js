import React from 'react';
import './Map.scss';
import ContactForm from '../Contact/Contact.js';
import girl from '../../assets/static-images/girl.jpg';

function Map() {
	return (
		<section className="cd__map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4967.081240563058!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1661360403449!5m2!1sen!2sus"></iframe>
			<div className="container">
				<div className="row cd__map_form">
					{/* <div className="col-md-12"> */}
						<div className="col-md-12 col-lg-4 img-column">
							<img src={girl} alt="Girl" />
						</div>
						<div className="col-md-12 col-lg-8 cd__map_form_wrapper">
							<h4>Send Us A Message</h4>
							<p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolor.</p>
							<ContactForm />
						</div>
					{/* </div> */}
				</div>
			</div>
		</section>
	);
}

export default Map;