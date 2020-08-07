import React from "react";
import {
	Container,
	Button,
	Table,
	Row,
	Col,
	Alert,
	Pagination,
	PaginationItem,
	PaginationLink,
} from "reactstrap";
// core components
import IndexNavbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
			cargando: false,
			seMuestranReasultados: false,
			datosCargados: false,
			datosCartas: [],
			paginaActual: 1,
			ultimaPagina: 118,
		};
	}
	componentDidMount() {
		document.body.classList.toggle("index-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("index-page");
	}

	async cargarCartas() {
		document.getElementById("main").scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
		this.setState({
			cargando: true,
			datosCargados: false,
			error: false,
		});
		await fetch(
			"https://api.scryfall.com/cards/search?q=usd>0&page=" +
				this.state.paginaActual,
			// "http://ni42.pythonanywhere.com/cards",
			{
				method: "get",
				mode: "cors",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					cargando: false,
					datosCargados: true,
					datosCartas: data.data,
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
					cargando: false,
				});
			});
	}
	scrollTop(e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	cambiarPagina(evento, accion) {
		evento.preventDefault();
		if (accion === "mas") {
			if (this.state.paginaActual !== this.state.ultimaPagina) {
				this.setState(
					{
						paginaActual: this.state.paginaActual + 1,
					},
					() => this.cargarCartas()
				);
			} else {
				console.log("pagina actual: " + this.state.paginaActual);
				console.log("ultima pagina: " + this.state.ultimaPagina);
				console.log("estas en la ultima pagina");
			}
		} else if (accion === "menos") {
			if (this.state.paginaActual !== 1) {
				this.setState(
					{
						paginaActual: this.state.paginaActual - 1,
					},
					() => this.cargarCartas()
				);
			} else {
				console.log("pagina actual: " + this.state.paginaActual);
				console.log("estas en la primera pagina");
			}
		} else {
			this.setState(
				{
					paginaActual: accion,
				},
				() => this.cargarCartas()
			);
		}
	}

	renderNumeros() {
		switch (this.state.paginaActual) {
			case 1:
				return (
					<React.Fragment>
						<PaginationItem active>
							<PaginationLink>1</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 2)}
						>
							<PaginationLink href="#">2</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 3)}
						>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 4)}
						>
							<PaginationLink href="#">4</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 5)}
						>
							<PaginationLink href="#">5</PaginationLink>
						</PaginationItem>
						<PaginationItem disabled>
							<PaginationLink href="#">...</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(e, this.state.ultimaPagina)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina}
							</PaginationLink>
						</PaginationItem>
					</React.Fragment>
				);

			case 2:
				return (
					<React.Fragment>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 1)}
						>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink>2</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 3)}
						>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 4)}
						>
							<PaginationLink href="#">4</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 5)}
						>
							<PaginationLink href="#">5</PaginationLink>
						</PaginationItem>
						<PaginationItem disabled>
							<PaginationLink href="#">...</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(e, this.state.ultimaPagina)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina}
							</PaginationLink>
						</PaginationItem>
					</React.Fragment>
				);

			case this.state.ultimaPagina:
				return (
					<React.Fragment>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 4
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 4}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 3
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 3}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 2
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 2}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 1
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 1}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink>
								{this.state.ultimaPagina}
							</PaginationLink>
						</PaginationItem>
					</React.Fragment>
				);
			case this.state.ultimaPagina - 1:
				return (
					<React.Fragment>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 4
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 4}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 3
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 3}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.ultimaPagina - 2
								)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina - 2}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink>
								{this.state.ultimaPagina - 1}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								href="#"
								onClick={(e) =>
									this.cambiarPagina(
										e,
										this.state.ultimaPagina
									)
								}
							>
								{this.state.ultimaPagina}
							</PaginationLink>
						</PaginationItem>
					</React.Fragment>
				);
			default:
				return (
					<React.Fragment>
						<PaginationItem
							onClick={(e) => this.cambiarPagina(e, 1)}
						>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem disabled>
							<PaginationLink href="#">...</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.paginaActual - 2
								)
							}
						>
							<PaginationLink href="#">
								{this.state.paginaActual - 2}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.paginaActual - 1
								)
							}
						>
							<PaginationLink href="#">
								{this.state.paginaActual - 1}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink>
								{this.state.paginaActual}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.paginaActual + 1
								)
							}
						>
							<PaginationLink href="#">
								{this.state.paginaActual + 1}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(
									e,
									this.state.paginaActual + 2
								)
							}
						>
							<PaginationLink href="#">
								{this.state.paginaActual + 2}
							</PaginationLink>
						</PaginationItem>
						<PaginationItem disabled>
							<PaginationLink href="#">...</PaginationLink>
						</PaginationItem>
						<PaginationItem
							onClick={(e) =>
								this.cambiarPagina(e, this.state.ultimaPagina)
							}
						>
							<PaginationLink href="#">
								{this.state.ultimaPagina}
							</PaginationLink>
						</PaginationItem>
					</React.Fragment>
				);
		}
	}

	render() {
		return (
			<>
				<IndexNavbar />
				<div className="wrapper">
					<div className="page-header header-filter">
						<div className="squares square1" />
						<div className="squares square2" />
						<div className="squares square3" />
						<div className="squares square4" />
						<div className="squares square5" />
						<div className="squares square6" />
						<div className="squares square7" />
						<Container>
							<div className="content-center brand">
								<Button
									className="btn-success"
									onClick={() => this.cargarCartas()}
								>
									Cargar Precios
								</Button>
							</div>
						</Container>
					</div>
					<div className="main my-5" id="main">
						<Container>
							<Row>
								{this.state.cargando && (
									<Col md="12">
										<Alert color="info">
											Cargando, por favor espere...
										</Alert>
									</Col>
								)}
								{this.state.error && (
									<Col md="12">
										<Alert color="danger">
											Hubo un error, intente de nuevo
											luego de unos momentos
										</Alert>
									</Col>
								)}
								{this.state.datosCargados && (
									<Col md="12" className="mb-5">
										<Alert color="success">
											Datos cargados correctamente!
										</Alert>
									</Col>
								)}
								{this.state.datosCargados && (
									<React.Fragment>
										<Col md="12">
											<Row>
												<Col md="8" className="mb-5">
													<Button className="btn-success">
														Imprimir Esta Página
													</Button>
												</Col>
												<Col md="4" className="mb-5">
													<Pagination listClassName="justify-content-end">
														<PaginationItem>
															<PaginationLink
																href="#"
																onClick={(e) =>
																	this.cambiarPagina(
																		e,
																		"menos"
																	)
																}
															>
																Anterior
															</PaginationLink>
														</PaginationItem>
														{this.renderNumeros()}
														<PaginationItem>
															<PaginationLink
																href="#"
																onClick={(e) =>
																	this.cambiarPagina(
																		e,
																		"mas"
																	)
																}
															>
																Siguiente
															</PaginationLink>
														</PaginationItem>
													</Pagination>
												</Col>
											</Row>
										</Col>
										<Col md="12">
											<Table>
												<thead className="text-primary">
													<tr>
														<th className="text-white">
															Nombre de la Carta
														</th>
														<th className="text-right text-white">
															Precio
														</th>
													</tr>
												</thead>
												<tbody>
													{this.state.datosCartas.map(
														(carta) => (
															<tr key={carta.id}>
																<td>
																	{carta.name}
																</td>
																<td className="text-right">
																	${" "}
																	{
																		carta
																			.prices
																			.usd
																	}{" "}
																	USD
																</td>
															</tr>
														)
													)}
												</tbody>
											</Table>
										</Col>
										<Col
											md="12"
											className="text-center mb-4"
										>
											<a
												href="#pablo"
												onClick={(e) =>
													this.scrollTop(e)
												}
												className="text-info title"
												style={{
													fontSize: "1.2rem",
													lineHeight: "1.61rem",
												}}
											>
												<i className="fas fa-3x fa-chevron-up"></i>
											</a>
										</Col>
									</React.Fragment>
								)}
							</Row>
						</Container>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Index;
