import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<Container>
					<Row>
						<Col md="9">
							<h1 className="title">Precios MTG</h1>
						</Col>

						<Col md="3">
							<h3 className="title mb-0">Hecho por:</h3>
							<div className="btn-wrapper profile">
								<Nav className="pt-0">
									<NavItem>
										<NavLink href="http://corvalangonzalo.xyz">
											Gonzalo Salvador Corvalán
										</NavLink>
									</NavItem>
								</Nav>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;
