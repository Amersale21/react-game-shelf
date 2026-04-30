import { Form } from "react-bootstrap";

function GenreFilter({ selectedGenre, setSelectedGenre, genres }) {
  return (
    <Form.Group controlId="genreFilter">
      <Form.Label>Filter by Genre</Form.Label>
      <Form.Select
        value={selectedGenre}
        onChange={(event) => setSelectedGenre(event.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default GenreFilter;
