import React from 'react';
import './ClientLogo.scss';
import logo1 from '../../assets/static-images/1.png';

function ClientLogo() {
	return (
		<section className='cd__client_logo'>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="cd__client_logo_item_wrapper">
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							<div className="cd__client_logo_item">
								<img src={logo1} alt="Logo 1" />
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ClientLogo;