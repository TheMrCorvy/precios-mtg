import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

class IndexNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			color: "navbar-transparent",
		};
	}
	componentDidMount() {
		window.addEventListener("scroll", this.changeColor);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.changeColor);
	}
	changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			this.setState({
				color: "bg-info",
			});
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			this.setState({
				color: "navbar-transparent",
			});
		}
	};
	toggleCollapse = () => {
		document.documentElement.classList.toggle("nav-open");
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		});
	};
	onCollapseExiting = () => {
		this.setState({
			collapseOut: "collapsing-out",
		});
	};
	onCollapseExited = () => {
		this.setState({
			collapseOut: "",
		});
	};
	scrollToDownload = () => {
		document
			.getElementById("download-section")
			.scrollIntoView({ behavior: "smooth" });
	};

	scrollTop = (event) => {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	render() {
		return (
			<Navbar
				className={"fixed-top " + this.state.color}
				color-on-scroll="100"
				expand="lg"
			>
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							to="/"
							tag={Link}
							id="navbar-brand"
							onClick={(e) => this.scrollTop(e)}
						>
							<span>Precios MTG</span>
						</NavbarBrand>
						<button
							aria-expanded={this.state.collapseOpen}
							className="navbar-toggler navbar-toggler"
							onClick={this.toggleCollapse}
						>
							<span className="navbar-toggler-bar bar1" />
							<span className="navbar-toggler-bar bar2" />
							<span className="navbar-toggler-bar bar3" />
						</button>
					</div>
					<Collapse
						className={
							"justify-content-end " + this.state.collapseOut
						}
						navbar
						isOpen={this.state.collapseOpen}
						onExiting={this.onCollapseExiting}
						onExited={this.onCollapseExited}
					>
						<div className="navbar-collapse-header">
							<Row>
								<Col className="collapse-brand" xs="6">
									<a
										href="#pablo"
										onClick={(e) => e.preventDefault()}
									>
										Precios MTG
									</a>
								</Col>
								<Col
									className="collapse-close text-right"
									xs="6"
								>
									<button
										aria-expanded={this.state.collapseOpen}
										className="navbar-toggler"
										onClick={this.toggleCollapse}
									>
										<i className="tim-icons icon-simple-remove" />
									</button>
								</Col>
							</Row>
						</div>
						<Nav navbar>
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									data-toggle="dropdown"
									href="#pablo"
									nav
									onClick={(e) => e.preventDefault()}
								>
									Compartir esta App en Redes Sociales
								</DropdownToggle>
								<DropdownMenu className="dropdown-with-icons">
									<DropdownItem href="https://twitter.com/intent/tweet?text=Obtén%20precios%20de%20cartas%20magic%20fácil%20y%20rápido%20con%20Precios%20MTG%20https://precios-mtg.herokuapp.com&amp;hashtags=NihongoApp">
										<i className="fab fa-twitter" />
										Twitter
									</DropdownItem>
									<DropdownItem href="https://www.facebook.com/sharer/sharer.php?u=https://precios-mtg.herokuapp.com">
										<i className="fab fa-facebook" />
										Facebook
									</DropdownItem>
									<DropdownItem href="https://api.whatsapp.com/send?text=Obtén%20precios%20de%20cartas%20magic%20fácil%20y%20rápido%20con%20Precios%20MTG%20https://precios-mtg.herokuapp.com">
										<i className="fab fa-whatsapp" />
										WhatsApp
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default IndexNavbar;
