import { Form } from "react-bootstrap";

function RatingSelector({ gameId, rating, handleUpdateRating }) {
  return (
    <Form.Group controlId={`ratingSelect-${gameId}`} className="mb-3">
      <Form.Label>Your Rating</Form.Label>
      <Form.Select
        value={rating}
        onChange={(event) => handleUpdateRating(gameId, event.target.value)}
      >
        <option value="Not Rated">Not Rated</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </Form.Select>
    </Form.Group>
  );
}

export default RatingSelector;
