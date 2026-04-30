import { Alert, Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

function GameList({
  games,
  emptyMessage,
  handleAddToLibrary,
  handleRemoveFromLibrary,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  handleUpdateStatus,
  handleUpdateRating,
  favoriteIds = [],
  libraryIds = [],
}) {
  if (games.length === 0) {
    return <Alert variant="info">{emptyMessage}</Alert>;
  }

  return (
    <Row>
      {games.map((game) => (
        <Col key={game.id} xs={12} sm={6} lg={4} xl={3} className="mb-4">
          <GameCard
            game={game}
            handleAddToLibrary={handleAddToLibrary}
            handleRemoveFromLibrary={handleRemoveFromLibrary}
            handleAddToFavorites={handleAddToFavorites}
            handleRemoveFromFavorites={handleRemoveFromFavorites}
            handleUpdateStatus={handleUpdateStatus}
            handleUpdateRating={handleUpdateRating}
            isFavorite={favoriteIds.includes(game.id)}
            isInLibrary={libraryIds.includes(game.id)}
          />
        </Col>
      ))}
    </Row>
  );
}

export default GameList;
