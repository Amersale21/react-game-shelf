import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import EmptyState from "../components/EmptyState";
import GameList from "../components/GameList";
import LibraryStats from "../components/LibraryStats";
import PageHeader from "../components/PageHeader";

function LibraryPage({
  library,
  handleRemoveFromLibrary,
  handleUpdateStatus,
  handleUpdateRating,
}) {
  const [successMessage, setSuccessMessage] = useState("");

  const handleRemoveWithFeedback = (gameId) => {
    const gameToRemove = library.find((game) => game.id === gameId);

    handleRemoveFromLibrary(gameId);

    if (gameToRemove) {
      setSuccessMessage(`Removed ${gameToRemove.title} from your library.`);
    }
  };

  return (
    <Container fluid className="mt-4 game-page-container">
      <PageHeader
        title="My Library"
        subtitle="View the games you added to your personal shelf, update your play status, rate your games, and track your progress."
      />

      {successMessage && (
        <Alert
          variant="warning"
          dismissible
          onClose={() => setSuccessMessage("")}
          className="game-remove-alert"
        >
          {successMessage}
        </Alert>
      )}

      {library.length === 0 ? (
        <EmptyState
          title="Your library is empty"
          message="You have not added any games yet. Browse the catalog and add games to start building your shelf."
          buttonText="Browse Games"
          buttonLink="/browse"
        />
      ) : (
        <>
          <LibraryStats library={library} />

          <GameList
            games={library}
            emptyMessage="You have not added any games yet."
            handleRemoveFromLibrary={handleRemoveWithFeedback}
            handleUpdateStatus={handleUpdateStatus}
            handleUpdateRating={handleUpdateRating}
            libraryIds={library.map((game) => game.id)}
          />
        </>
      )}
    </Container>
  );
}

export default LibraryPage;
