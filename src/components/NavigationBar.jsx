import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar({ currentUser, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Game Shelf
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/browse">
              Browse Games
            </Nav.Link>

            <Nav.Link as={Link} to="/library">
              My Library
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>

            <Nav.Link as={Link} to="/account">
              Account
            </Nav.Link>

            {currentUser && (
              <>
                <Navbar.Text className="ms-lg-3 me-lg-2 signed-in-text">
                  Signed in as {currentUser}
                </Navbar.Text>

                <Button
                  size="sm"
                  variant="outline-warning"
                  onClick={handleLogout}
                  className="mt-2 mt-lg-0"
                >
                  Log Out
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
