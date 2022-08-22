import React, { useId } from "react";
import Socials from "../../components/Socials/Socials";

function FooterTop() {
	const footerMainMenu = [
		"Home",
		"About Us",
		"Feature",
		"Pricing",
		"Contact"
	];
	const footerSecondaryMenu = [
		"Terms & condition",
		"Privacy",
		"Policy",
		"Support",
		"FAQ"
	];

	const footerAddresses = [
		"+(012) 123 456",
		"info@yourmail.com",
		"West anderson court  32",
		"London , UK",
	];

	const id = useId();

	const menuItem1 = footerMainMenu.map(item => {
		return (
			<li key={`${id}-mm`}><a href="#"><i className="bi bi-chevron-right"></i> {item}</a></li>
		);
	});

	const menuItem2 = footerSecondaryMenu.map(item => {

		return (
			<li key={`${id}-sm`}><a href="#"><i className="bi bi-chevron-right"></i> {item}</a>
			</li>
		);
	});

	const footerAddress = footerAddresses.map(item => {
		return (
			<li key={`${id}-mfa`}>{item}</li>
		);
	});

	return (
		<section className="cd__footer_top">
			<div className="container">
				<div className="row">

					<div className="col-md-3">
						<div className="cd__footer_top_item">
							<div className="cd__footer_logo">
								<a href="/"><h3>Car <span>Detailing</span></h3></a>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="cd__footer_top_item">
							{menuItem1 && <ul>{menuItem1}</ul>}
						</div>
					</div>

					<div className="col-md-3">
						<div className="cd__footer_top_item">
							<h4 className="cd__footer_top_title d-none">Quick Links</h4>
							{menuItem2 && <ul>{menuItem2}</ul>}
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4">
						<div className="cd__footer_top_item">
							{footerAddress && <ul className="cd__footer_top_item_address">{footerAddress}</ul>}
							<Socials />
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default FooterTop;