import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

function AuthPage({
  currentUser,
  handleLogin,
  handleCreateAccount,
  handleLogout,
}) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pageMessage, setPageMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setPageMessage("Please enter both a username and password.");
      return;
    }

    let result;

    if (isCreatingAccount) {
      result = handleCreateAccount(username.trim(), password);
    } else {
      result = handleLogin(username.trim(), password);
    }

    setPageMessage(result.message);

    if (result.success) {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Container fluid className="mt-4 game-page-container">
      <PageHeader
        title="Account"
        subtitle="Create an account or log in to save your personal library and favorites between visits."
      />

      {currentUser ? (
        <Card className="shadow-sm account-card">
          <Card.Body className="text-center">
            <Card.Title>You are logged in as {currentUser}</Card.Title>

            <Card.Text>
              Your library, favorites, play status, and ratings are being saved
              to this account on this browser.
            </Card.Text>

            <Button variant="danger" onClick={handleLogout}>
              Log Out
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card className="shadow-sm account-card">
          <Card.Body>
            <Card.Title className="text-center">
              {isCreatingAccount ? "Create Account" : "Log In"}
            </Card.Title>

            <Card.Text className="text-center">
              {isCreatingAccount
                ? "Create a new Game Shelf account for this browser."
                : "Log in to load your saved Game Shelf library."}
            </Card.Text>

            {pageMessage && (
              <Alert variant="info" className="game-feedback-alert">
                {pageMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="accountUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group controlId="accountPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  {isCreatingAccount ? "Create Account" : "Log In"}
                </Button>

                <Button
                  type="button"
                  variant="outline-warning"
                  onClick={() => {
                    setIsCreatingAccount(!isCreatingAccount);
                    setPageMessage("");
                  }}
                >
                  {isCreatingAccount
                    ? "Already have an account? Log In"
                    : "Need an account? Create One"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default AuthPage;
