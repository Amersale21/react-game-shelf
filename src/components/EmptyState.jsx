import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmptyState({ title, message, buttonText, buttonLink }) {
  return (
    <Alert variant="info" className="text-center">
      <h2 className="h4">{title}</h2>

      <p>{message}</p>

      {buttonText && buttonLink && (
        <Button as={Link} to={buttonLink} variant="primary">
          {buttonText}
        </Button>
      )}
    </Alert>
  );
}

export default EmptyState;
