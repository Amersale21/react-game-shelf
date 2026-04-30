import { Card, Col, Row } from "react-bootstrap";

function LibraryStats({ library }) {
  const totalGames = library.length;

  const completedGames = library.filter(
    (game) => game.status === "Completed",
  ).length;

  const currentlyPlayingGames = library.filter(
    (game) => game.status === "Currently Playing",
  ).length;

  const notStartedGames = library.filter(
    (game) => game.status === "Haven't Started",
  ).length;

  return (
    <Row className="mb-4">
      <Col xs={12} md={3} className="mb-3">
        <Card className="text-center h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Total Games</Card.Title>
            <Card.Text className="fs-3 fw-bold">{totalGames}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3} className="mb-3">
        <Card className="text-center h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Not Started</Card.Title>
            <Card.Text className="fs-3 fw-bold">{notStartedGames}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3} className="mb-3">
        <Card className="text-center h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Currently Playing</Card.Title>
            <Card.Text className="fs-3 fw-bold">
              {currentlyPlayingGames}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={3} className="mb-3">
        <Card className="text-center h-100 shadow-sm">
          <Card.Body>
            <Card.Title>Completed</Card.Title>
            <Card.Text className="fs-3 fw-bold">{completedGames}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default LibraryStats;
