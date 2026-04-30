import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import GameCover from "./GameCover";
import RatingSelector from "./RatingSelector";
import StarRatingDisplay from "./StarRatingDisplay";
import StatusSelector from "./StatusSelector";

function GameCard({
  game,
  handleAddToLibrary,
  handleRemoveFromLibrary,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  handleUpdateStatus,
  handleUpdateRating,
  isFavorite = false,
  isInLibrary = false,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReturnToShelf = () => {
    setIsFlipped(false);
  };

  const handleFrontCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFlip();
    }
  };

  const stopCardClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`game-flip-card ${isFlipped ? "is-flipped" : ""}`}>
      <div className="game-flip-card-inner">
        <Card
          className="h-100 shadow-sm game-flip-face game-flip-front"
          role="button"
          tabIndex={0}
          onClick={handleFlip}
          onKeyDown={handleFrontCardKeyDown}
          aria-label={`Open details for ${game.title}`}
        >
          <Card.Body className="d-flex flex-column justify-content-center text-center">
            <div className="mb-3">
              <Card.Title className="game-card-title">{game.title}</Card.Title>

              <div className="mb-2">
                {isInLibrary && (
                  <Badge bg="success" className="me-2">
                    In Library
                  </Badge>
                )}

                {isFavorite && (
                  <Badge bg="warning" text="dark">
                    Favorite
                  </Badge>
                )}
              </div>
            </div>

            <Card.Text>
              <strong>Genre:</strong> {game.genre}
            </Card.Text>

            <Card.Text>
              <strong>Console:</strong> {game.console}
            </Card.Text>

            <Card.Text>
              <strong>Release Year:</strong> {game.year}
            </Card.Text>

            <div className="mt-auto">
              <p className="flip-card-hint mb-0">
                Click to pull this game from the shelf
              </p>
            </div>
          </Card.Body>
        </Card>

        <Card
          className="h-100 shadow-sm game-flip-face game-flip-back"
          onClick={handleReturnToShelf}
          role="button"
          tabIndex={0}
          aria-label={`Return ${game.title} to the shelf`}
        >
          <Card.Body className="d-flex flex-column text-center">
            <GameCover game={game} />

            <Card.Title className="game-card-title mt-3">
              {game.title}
            </Card.Title>

            <Card.Text className="mb-1">
              <strong>Genre:</strong> {game.genre}
            </Card.Text>

            <Card.Text className="mb-1">
              <strong>Console:</strong> {game.console}
            </Card.Text>

            <Card.Text className="mb-3">
              <strong>Release Year:</strong> {game.year}
            </Card.Text>

            <StarRatingDisplay rating={game.shelfRating || 4} />

            <div onClick={stopCardClick}>
              {handleUpdateStatus && (
                <StatusSelector
                  gameId={game.id}
                  status={game.status}
                  handleUpdateStatus={handleUpdateStatus}
                />
              )}

              {handleUpdateRating && (
                <RatingSelector
                  gameId={game.id}
                  rating={game.rating}
                  handleUpdateRating={handleUpdateRating}
                />
              )}
            </div>

            <div className="mt-auto d-grid gap-2" onClick={stopCardClick}>
              {handleAddToLibrary && !isInLibrary && (
                <Button
                  variant="primary"
                  onClick={() => handleAddToLibrary(game)}
                >
                  Add to Library
                </Button>
              )}

              {handleAddToLibrary &&
                isInLibrary &&
                !handleRemoveFromLibrary && (
                  <Button variant="outline-success" disabled>
                    Already in Library
                  </Button>
                )}

              {handleAddToFavorites && !isFavorite && (
                <Button
                  variant="outline-warning"
                  onClick={() => handleAddToFavorites(game)}
                >
                  Add to Favorites
                </Button>
              )}

              {handleRemoveFromFavorites && isFavorite && (
                <Button
                  variant="warning"
                  onClick={() => handleRemoveFromFavorites(game.id)}
                >
                  Remove Favorite
                </Button>
              )}

              {handleRemoveFromLibrary && (
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromLibrary(game.id)}
                >
                  Remove from Library
                </Button>
              )}

              <Button variant="secondary" onClick={handleReturnToShelf}>
                Return to Shelf
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default GameCard;
