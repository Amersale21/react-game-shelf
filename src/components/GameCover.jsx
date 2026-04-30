function GameCover({ game }) {
  function getCoverColors() {
    if (game.genre === "Action-Adventure") {
      return ["#2563eb", "#7c3aed"];
    }

    if (game.genre === "Action RPG") {
      return ["#9333ea", "#1d4ed8"];
    }

    if (game.genre === "Shooter") {
      return ["#dc2626", "#7c2d12"];
    }

    if (game.genre === "Sandbox") {
      return ["#16a34a", "#0f766e"];
    }

    if (game.genre === "Platformer") {
      return ["#f59e0b", "#ea580c"];
    }

    if (game.genre === "Simulation") {
      return ["#0ea5e9", "#14b8a6"];
    }

    if (game.genre === "Fighting") {
      return ["#ef4444", "#ec4899"];
    }

    if (game.genre === "Racing") {
      return ["#06b6d4", "#3b82f6"];
    }

    if (game.genre === "Roguelike") {
      return ["#8b5cf6", "#db2777"];
    }

    if (game.genre === "Sports") {
      return ["#22c55e", "#0891b2"];
    }

    return ["#334155", "#1e293b"];
  }

  const [primaryColor, secondaryColor] = getCoverColors();

  return (
    <div
      className="game-cover"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      }}
      aria-label={`${game.title} stylized cover`}
    >
      <div className="game-cover-console">{game.console}</div>

      <div className="game-cover-title">{game.title}</div>

      <div className="game-cover-footer">
        <span>{game.genre}</span>
        <span>{game.year}</span>
      </div>
    </div>
  );
}

export default GameCover;
