import { Form } from "react-bootstrap";

function ConsoleFilter({ selectedConsole, setSelectedConsole, consoles }) {
  return (
    <Form.Group controlId="consoleFilter">
      <Form.Label>Filter by Console</Form.Label>
      <Form.Select
        value={selectedConsole}
        onChange={(event) => setSelectedConsole(event.target.value)}
      >
        {consoles.map((consoleName) => (
          <option key={consoleName} value={consoleName}>
            {consoleName}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default ConsoleFilter;
