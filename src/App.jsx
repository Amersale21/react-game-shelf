import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import BrowseGamesPage from "./pages/BrowseGamesPage";
import LibraryPage from "./pages/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage";
import AuthPage from "./pages/AuthPage";
import gamesData from "./data/games";
import "./App.css";

function App() {
  const [library, setLibrary] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState("");
  const [globalMessage, setGlobalMessage] = useState("");

  useEffect(() => {
    const savedUsers = localStorage.getItem("gameShelfUsers");
    const savedCurrentUser = localStorage.getItem("gameShelfCurrentUser");

    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);
      setUsers(parsedUsers);

      if (savedCurrentUser && parsedUsers[savedCurrentUser]) {
        setCurrentUser(savedCurrentUser);
        setLibrary(parsedUsers[savedCurrentUser].library || []);
        setFavorites(parsedUsers[savedCurrentUser].favorites || []);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gameShelfUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      setUsers((previousUsers) => ({
        ...previousUsers,
        [currentUser]: {
          ...previousUsers[currentUser],
          library: library,
          favorites: favorites,
        },
      }));
    }
  }, [library, favorites, currentUser]);

  const handleAddToLibrary = (game) => {
    const alreadyAdded = library.find((savedGame) => savedGame.id === game.id);

    if (alreadyAdded) {
      return false;
    }

    const gameWithLibraryInfo = {
      ...game,
      status: "Haven't Started",
      rating: "Not Rated",
    };

    setLibrary([...library, gameWithLibraryInfo]);

    const updatedFavorites = favorites.filter(
      (favoriteGame) => favoriteGame.id !== game.id,
    );

    setFavorites(updatedFavorites);

    return true;
  };

  const handleRemoveFromLibrary = (gameId) => {
    const updatedLibrary = library.filter((game) => game.id !== gameId);
    setLibrary(updatedLibrary);
  };

  const handleUpdateStatus = (gameId, newStatus) => {
    const updatedLibrary = library.map((game) => {
      if (game.id === gameId) {
        return {
          ...game,
          status: newStatus,
        };
      }

      return game;
    });

    setLibrary(updatedLibrary);
  };

  const handleUpdateRating = (gameId, newRating) => {
    const updatedLibrary = library.map((game) => {
      if (game.id === gameId) {
        return {
          ...game,
          rating: newRating,
        };
      }

      return game;
    });

    setLibrary(updatedLibrary);
  };

  const handleAddToFavorites = (game) => {
    const alreadyFavorited = favorites.find(
      (favoriteGame) => favoriteGame.id === game.id,
    );

    if (!alreadyFavorited) {
      setFavorites([...favorites, game]);
    }
  };

  const handleRemoveFromFavorites = (gameId) => {
    const updatedFavorites = favorites.filter((game) => game.id !== gameId);
    setFavorites(updatedFavorites);
  };

  const handleCreateAccount = (username, password) => {
    if (users[username]) {
      return {
        success: false,
        message: "That username already exists. Please choose another one.",
      };
    }

    const newUser = {
      password: password,
      library: [],
      favorites: [],
    };

    const updatedUsers = {
      ...users,
      [username]: newUser,
    };

    setUsers(updatedUsers);
    setCurrentUser(username);
    setLibrary([]);
    setFavorites([]);
    localStorage.setItem("gameShelfCurrentUser", username);
    setGlobalMessage(`Created account and logged in as ${username}.`);

    return {
      success: true,
      message: `Account created. You are now logged in as ${username}.`,
    };
  };

  const handleLogin = (username, password) => {
    const savedUser = users[username];

    if (!savedUser) {
      return {
        success: false,
        message: "No account was found with that username.",
      };
    }

    if (savedUser.password !== password) {
      return {
        success: false,
        message: "Incorrect password. Please try again.",
      };
    }

    setCurrentUser(username);
    setLibrary(savedUser.library || []);
    setFavorites(savedUser.favorites || []);
    localStorage.setItem("gameShelfCurrentUser", username);
    setGlobalMessage(`Logged in as ${username}.`);

    return {
      success: true,
      message: `Welcome back, ${username}!`,
    };
  };

  const handleLogout = () => {
    if (currentUser) {
      setUsers((previousUsers) => ({
        ...previousUsers,
        [currentUser]: {
          ...previousUsers[currentUser],
          library: library,
          favorites: favorites,
        },
      }));

      setGlobalMessage(`Logged out of ${currentUser}.`);
    }

    setCurrentUser("");
    setLibrary([]);
    setFavorites([]);
    localStorage.removeItem("gameShelfCurrentUser");
  };

  const libraryIds = library.map((game) => game.id);
  const favoriteIds = favorites.map((game) => game.id);

  return (
    <div>
      <NavigationBar currentUser={currentUser} handleLogout={handleLogout} />

      {globalMessage && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setGlobalMessage("")}
          className="m-3 game-feedback-alert"
        >
          {globalMessage}
        </Alert>
      )}

      <Routes>
        <Route path="/" element={<HomePage games={gamesData} />} />

        <Route
          path="/browse"
          element={
            <BrowseGamesPage
              games={gamesData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleAddToLibrary={handleAddToLibrary}
              handleAddToFavorites={handleAddToFavorites}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
              libraryIds={libraryIds}
              favoriteIds={favoriteIds}
            />
          }
        />

        <Route
          path="/library"
          element={
            <LibraryPage
              library={library}
              handleRemoveFromLibrary={handleRemoveFromLibrary}
              handleUpdateStatus={handleUpdateStatus}
              handleUpdateRating={handleUpdateRating}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              handleAddToLibrary={handleAddToLibrary}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
              libraryIds={libraryIds}
              favoriteIds={favoriteIds}
            />
          }
        />

        <Route
          path="/account"
          element={
            <AuthPage
              currentUser={currentUser}
              handleLogin={handleLogin}
              handleCreateAccount={handleCreateAccount}
              handleLogout={handleLogout}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
