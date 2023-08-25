import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Welcome from "./Welcome";
import ConnectionController from "./controller/ConnectionController";
import SpaceController from "./controller/SpaceController";

export default function App() {

  const [owner, setOwner] = useState(null);

  function ownerName() {
    return owner !== null ? `${owner.name} ${owner.surname}` : "";
  }

  return (
    <BrowserRouter>
      <header className="d-flex justify-content-center align-items-center">
          <h1>Cats<i className="ms-3 me-3 fa fa-paw text-goldenrod"></i>Club</h1>
      </header>

      <Navbar className="mb-5" collapseOnSelect="true" bg="black" variant="dark" sticky="top" expand="md">
        <Container>
          <Navbar.Brand className="fst-italic">{ownerName()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link eventKey="1" as={Link} to="/welcome">
                <i className="fa fa-home me-2"></i>
                Accueil
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/space" hidden={owner === null}>
                <i className="fa fa-user me-2"></i>
                Mon espace
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/connection" hidden={owner !== null}>
                <i className="fa fa-key me-2"></i>
                Connexion
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/welcome" hidden={owner === null}>
                <i className="fa fa-unlock me-2"></i>
                Déconnexion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <article>
        <Container>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/welcome" element={<Welcome />} />
            <Route 
              exact path="/connection" 
              element={<ConnectionController owner={owner} setOwner={owner => setOwner(owner)} />}
            />
            <Route 
              exact path="/space" 
              element={<SpaceController owner={owner} setOwner={owner => setOwner(owner)} />}
            />
          </Routes>
        </Container>
      </article>

      <footer className="d-flex justify-content-center align-items-center">
          <h6>Cats Club - 2023</h6>
      </footer>
    </BrowserRouter>
  );
}