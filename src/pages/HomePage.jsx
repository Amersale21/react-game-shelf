import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeaturedGameCard from "../components/FeaturedGameCard";
import HowToUse from "../components/HowToUse";
import gameShelfLogo from "../assets/game-shelf-logo.png";

function HomePage({ games }) {
  const featuredGames = games.slice(0, 3);

  return (
    <Container className="mt-4">
      <section className="mb-5 text-center">
        <h1 className="mb-3">Game Shelf</h1>

        <img
          src={gameShelfLogo}
          alt="Neon video game controller representing the Game Shelf website"
          className="home-logo-image"
        />

        <p className="lead">
          Build your personal video game library, track your progress, rate
          games you have played, and save favorites you want to remember.
        </p>

        <Button as={Link} to="/browse" variant="primary">
          Browse Games
        </Button>
      </section>

      <HowToUse />

      <section className="text-center">
        <h2 className="mb-3">Featured Games</h2>

        <p className="mb-4">
          A few highlighted games from the Game Shelf catalog.
        </p>

        <Row>
          {featuredGames.map((game) => (
            <Col key={game.id} xs={12} md={4} className="mb-3">
              <FeaturedGameCard game={game} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default HomePage;
