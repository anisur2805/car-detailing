import React from 'react';
import Subscriber from '../../components/Subscriber/Subscriber';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

function FooterTop() {
	return (
		<section className="cd__footer_top">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="cd__footer_top_item pr-4">
							<div className="cd__footer_logo">
								<a href="/"><h3>Car <span>Detailing</span></h3></a>
							</div>
							<p className="cd__footer_top_subtitle">Aliquam luctus pellentesque magna, a eleifend nisl porttitor id. Nulla facilisi. Proin erat nisl, tristique eget nunc et, ultricies euismod </p>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-none">
						<div className="cd__footer_top_item">
							<h4 className='cd__footer_top_title'>Pages</h4>
							<ul>
								<li><a href="#"> Plugins</a></li>
								<li><a href="#"><i className="bi bi-chevron-right"></i> Feadback</a></li>
								<li><a href="#"><i className="bi bi-chevron-right"></i> Locations</a></li>
								<li><a href="#"><i className="bi bi-chevron-right"></i> Privacy Policy</a></li>
								<li><a href="#"><i className="bi bi-chevron-right"></i> Terms & Condition</a></li>
							</ul>
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="cd__footer_top_item">
							<h4 className='cd__footer_top_title'>Quick Links</h4>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Gallery</a></li>
								<li><a href="#">Blog </a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="cd__footer_top_item">
							<h4 className='cd__footer_top_title'>Newsletter</h4>
							<p className="cd__footer_top_subtitle">Cras quis lobortis enim morbi congue sem Curabitur id augue  ipsum</p>
							
							<Subscriber  />
						</div>
					</div>


				</div>
			</div>
		</section>
	);
}

export default FooterTop;