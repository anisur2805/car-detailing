import React from 'react';
import icon1 from '../../assets/static-images/i.png';
import './Services.scss';

function Services() {
	return (
		<>
			<section className='cd__services section'>
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h3>Our Services</h3>
						</div>
					</div>
					<div className="row mb-120px">
						<div className="col-md-3">
							<div className="cd__services_box text-center">
								<img src={icon1} alt="Icon 1" />
								<h4>
									Interior Services
								</h4>
								<p>Donec quis leo lacinia erat consectetur conse</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="cd__services_box text-center">
								<img src={icon1} alt="Icon 1" />
								<h4>
									Interior Services
								</h4>
								<p>Donec quis leo lacinia erat consectetur conse</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="cd__services_box text-center">
								<img src={icon1} alt="Icon 1" />
								<h4>
									Interior Services
								</h4>
								<p>Donec quis leo lacinia erat consectetur conse</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="cd__services_box text-center">
								<img src={icon1} alt="Icon 1" />
								<h4>
									Interior Services
								</h4>
								<p>Donec quis leo lacinia erat consectetur conse</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='test'>&nbsp;</section>
		</>
	);
}

export default Services;