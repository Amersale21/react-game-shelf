import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "Browse the Catalog",
      description: "Search and filter games by title, genre, or console.",
      link: "/browse",
    },
    {
      number: "02",
      title: "Save Favorites",
      description:
        "Bookmark games that catch your attention before adding them.",
      link: "/favorites",
    },
    {
      number: "03",
      title: "Build Your Library",
      description:
        "Add games to your shelf so your collection is easy to manage.",
      link: "/browse",
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Update your play status and rate games after playing them.",
      link: "/library",
    },
  ];

  return (
    <section className="mb-5 text-center">
      <h2 className="mb-3">How to Use Game Shelf</h2>

      <p className="mb-4">
        Follow these steps to organize your games and keep track of your
        progress.
      </p>

      <Row>
        {steps.map((step) => (
          <Col key={step.number} xs={12} md={6} lg={3} className="mb-3">
            <Card
              as={Link}
              to={step.link}
              className="h-100 shadow-sm how-to-card home-action-card"
            >
              <Card.Body>
                <div className="how-to-number">{step.number}</div>

                <Card.Title>{step.title}</Card.Title>

                <Card.Text>{step.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default HowToUse;
