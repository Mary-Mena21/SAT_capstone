import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import SAT_1 from "../images/SAT_1.jpg";
import SAT_2 from "../images/SAT_2.jpg";
import SAT_3 from "../images/SAT_3.jpg";
import w_color_2 from "../images/w_color_2.jpg";


export const About = () => {
    return (
        <>
        <Container>
        {/* <Navbar sticky="top" /> */}
           { <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Link"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >}
            </Container>
            {/* -----Carousel_1------ */}

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SAT_1}
                        style={{ maxHeight: "100vh" }}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SAT_2}
                        style={{ maxHeight: "100vh" }}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SAT_3}
                        style={{ maxHeight: "100vh", maxWidth: "auto" }}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* -----Carousel_2------ */}
{/*             <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <h1>Carousel_2</h1>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            className="d-block w-100"
                            src={SAT_1}
                            style={{ maxHeight: "100vh" }}
                            alt="Second slide"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            className="d-block w-100"
                            src={SAT_2}
                            style={{ maxHeight: "100vh" }}
                            alt="Second slide"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            className="d-block w-100"
                            src={SAT_2}
                            style={{ maxHeight: "100vh" }}
                            alt="Second slide"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* -----------c_3----------- */}
            {/*<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img
    className="d-block w-100"
    src={SAT_2}
    style={{ maxHeight: "100vh" }}
    alt="Second slide"
/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img
    className="d-block w-100"
    src={SAT_2}
    style={{ maxHeight: "100vh" }}
    alt="Second slide"
/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img
    className="d-block w-100"
    src={SAT_2}
    style={{ maxHeight: "100vh" }}
    alt="Second slide"
/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
        </>
    );
};
