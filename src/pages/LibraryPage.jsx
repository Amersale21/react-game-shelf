import { Col, Container, Row } from "react-bootstrap";
import GameCard from "../components/GameCard";

function LibraryPage({ library, handleRemoveFromLibrary }) {
    return (
        <Container className="mt-4">
            <h1 className="mb-3">My Library</h1>

            {library.length === 0 ? (
                <p>You have not added any games yet.</p>
            ) : (
                <Row>
                    {library.map((game) => (
                        <Col key={game.id} xs={12} md={6} lg={4} className="mb-4">
                            <GameCard
                                game={game}
                                handleRemoveFromLibrary={handleRemoveFromLibrary}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default LibraryPage;