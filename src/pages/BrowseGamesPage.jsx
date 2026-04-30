import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import ConsoleFilter from "../components/ConsoleFilter";
import GameList from "../components/GameList";
import GenreFilter from "../components/GenreFilter";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";

function BrowseGamesPage({
  games,
  searchTerm,
  setSearchTerm,
  handleAddToLibrary,
  handleAddToFavorites,
  handleRemoveFromFavorites,
  libraryIds,
  favoriteIds,
}) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedConsole, setSelectedConsole] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");

  const genres = ["All", ...new Set(games.map((game) => game.genre))];
  const consoles = ["All", ...new Set(games.map((game) => game.console))];

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || game.genre === selectedGenre;

    const matchesConsole =
      selectedConsole === "All" || game.console === selectedConsole;

    const isNotInLibrary = !libraryIds.includes(game.id);

    return matchesSearch && matchesGenre && matchesConsole && isNotInLibrary;
  });

  const handleAddWithFeedback = (game) => {
    const wasAdded = handleAddToLibrary(game);

    if (wasAdded) {
      setSuccessMessage(`Added ${game.title} to your library!`);
    }
  };

  return (
    <Container fluid className="mt-4 game-page-container">
      <PageHeader
        title="Browse Games"
        subtitle="Search through the Game Shelf catalog, filter by genre or console, and save games to your personal collection."
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

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <p className="mb-3">
        Use the search and filters together to quickly narrow down the catalog.
      </p>

      <Row className="mb-4">
        <Col xs={12} md={6} className="mb-3">
          <GenreFilter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            genres={genres}
          />
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <ConsoleFilter
            selectedConsole={selectedConsole}
            setSelectedConsole={setSelectedConsole}
            consoles={consoles}
          />
        </Col>
      </Row>

      <p>
        Showing <strong>{filteredGames.length}</strong> available game
        {filteredGames.length === 1 ? "" : "s"}.
      </p>

      <GameList
        games={filteredGames}
        emptyMessage="No available games match your current search or filter choices."
        handleAddToLibrary={handleAddWithFeedback}
        handleAddToFavorites={handleAddToFavorites}
        handleRemoveFromFavorites={handleRemoveFromFavorites}
        favoriteIds={favoriteIds}
        libraryIds={libraryIds}
      />
    </Container>
  );
}

export default BrowseGamesPage;
