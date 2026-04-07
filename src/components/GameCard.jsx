import { Button, Card } from "react-bootstrap";

function GameCard({ game, handleAddToLibrary, handleRemoveFromLibrary }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>
                    <strong>Genre:</strong> {game.genre}
                </Card.Text>
                <Card.Text>
                    <strong>Console:</strong> {game.console}
                </Card.Text>
                <Card.Text>
                    <strong>Release Year:</strong> {game.year}
                </Card.Text>

                {handleAddToLibrary && (
                    <Button variant="primary" onClick={() => handleAddToLibrary(game)}>
                        Add to Library
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
            </Card.Body>
        </Card>
    );
}

export default GameCard;