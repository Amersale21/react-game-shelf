import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import gamesData from "./data/games";
import "./App.css";

function App() {
  const [library, setLibrary] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToLibrary = (game) => {
    const alreadyAdded = library.find((savedGame) => savedGame.id === game.id);

    if (!alreadyAdded) {
      setLibrary([...library, game]);
    }
  };

  const handleRemoveFromLibrary = (gameId) => {
    const updatedLibrary = library.filter((game) => game.id !== gameId);
    setLibrary(updatedLibrary);
  };

  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              games={filteredGames}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleAddToLibrary={handleAddToLibrary}
            />
          }
        />
        <Route
          path="/library"
          element={
            <LibraryPage
              library={library}
              handleRemoveFromLibrary={handleRemoveFromLibrary}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;