import { Form } from "react-bootstrap";

function StatusSelector({ gameId, status, handleUpdateStatus }) {
  return (
    <Form.Group controlId={`statusSelect-${gameId}`} className="mb-3">
      <Form.Label>Play Status</Form.Label>
      <Form.Select
        value={status}
        onChange={(event) => handleUpdateStatus(gameId, event.target.value)}
      >
        <option value="Haven't Started">Haven&apos;t Started</option>
        <option value="Currently Playing">Currently Playing</option>
        <option value="Completed">Completed</option>
      </Form.Select>
    </Form.Group>
  );
}

export default StatusSelector;
