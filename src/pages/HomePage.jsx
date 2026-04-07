import { Col, Container, Row } from "react-bootstrap";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";

function HomePage({ games, searchTerm, setSearchTerm, handleAddToLibrary }) {
    return (
        <Container className="mt-4">
            <h1 className="mb-3">Game Shelf</h1>
            <p>Browse games and add them to your personal library.</p>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Row>
                {games.map((game) => (
                    <Col key={game.id} xs={12} md={6} lg={4} className="mb-4">
                        <GameCard game={game} handleAddToLibrary={handleAddToLibrary} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;