import React from 'react';
import ClientLogo from '../../components/ClientLogo/ClientLogo';
import './footer.scss';
import FooterTop from './FooterTop';

function Footer() {
	return (
		<>
			<ClientLogo />
			<FooterTop />
			<footer className="cd__footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p className="text-center">Copyright 2020 @company name. All right reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;