import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import EmptyState from "../components/EmptyState";
import GameList from "../components/GameList";
import PageHeader from "../components/PageHeader";

function FavoritesPage({
  favorites,
  handleAddToLibrary,
  handleRemoveFromFavorites,
  libraryIds,
  favoriteIds,
}) {
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddToLibraryWithFeedback = (game) => {
    const wasAdded = handleAddToLibrary(game);

    if (wasAdded) {
      setSuccessMessage(
        `Added ${game.title} to your library and removed it from favorites.`,
      );
    }
  };

  const handleRemoveFavoriteWithFeedback = (gameId) => {
    const gameToRemove = favorites.find((game) => game.id === gameId);

    handleRemoveFromFavorites(gameId);

    if (gameToRemove) {
      setSuccessMessage(`Removed ${gameToRemove.title} from favorites.`);
    }
  };

  return (
    <Container fluid className="mt-4 game-page-container">
      <PageHeader
        title="Favorite Games"
        subtitle="Keep track of games that catch your attention before deciding whether to add them to your personal library."
      />

      {successMessage && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setSuccessMessage("")}
          className="game-feedback-alert"
        >
          {successMessage}
        </Alert>
      )}

      {favorites.length === 0 ? (
        <EmptyState
          title="No favorite games yet"
          message="Favorite games from the browse page to build a wishlist before adding them to your library."
          buttonText="Browse Games"
          buttonLink="/browse"
        />
      ) : (
        <>
          <p>
            Showing <strong>{favorites.length}</strong> favorite game
            {favorites.length === 1 ? "" : "s"}.
          </p>

          <GameList
            games={favorites}
            emptyMessage="You have not favorited any games yet."
            handleAddToLibrary={handleAddToLibraryWithFeedback}
            handleRemoveFromFavorites={handleRemoveFavoriteWithFeedback}
            libraryIds={libraryIds}
            favoriteIds={favoriteIds}
          />
        </>
      )}
    </Container>
  );
}

export default FavoritesPage;
