import { Form } from "react-bootstrap";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Form className="mb-4">
      <Form.Group controlId="gameSearch">
        <Form.Label>Search Games</Form.Label>

        <Form.Control
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <Form.Text>Search by game title to narrow down the catalog.</Form.Text>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
