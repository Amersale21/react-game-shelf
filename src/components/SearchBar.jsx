import { Form } from "react-bootstrap";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <Form className="mb-4">
            <Form.Control
                type="text"
                placeholder="Search for a game..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </Form>
    );
}

export default SearchBar;