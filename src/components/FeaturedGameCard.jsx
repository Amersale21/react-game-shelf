import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import GameCover from "./GameCover";
import StarRatingDisplay from "./StarRatingDisplay";

function FeaturedGameCard({ game }) {
  return (
    <Card className="h-100 shadow-sm featured-game-card">
      <Card.Body className="d-flex flex-column text-center">
        <div className="featured-game-cover-wrapper">
          <GameCover game={game} />
        </div>

        <Card.Title className="mt-3">{game.title}</Card.Title>

        <Card.Text className="mb-1">
          <strong>Genre:</strong> {game.genre}
        </Card.Text>

        <Card.Text className="mb-3">
          <strong>Console:</strong> {game.console}
        </Card.Text>

        <StarRatingDisplay rating={game.shelfRating || 4} />

        <div className="mt-auto">
          <Button as={Link} to="/browse" variant="primary">
            Find in Catalog
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FeaturedGameCard;
