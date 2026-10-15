
import { toast } from "react-toastify";

function TechnologyCard({
  technology,
  isSelected,
  onAdd,
}) {
  function handleAdd() {
    if (isSelected) {
      toast.warning(
        technology.name + " is already in your stack!"
      );
      return;
    }

    onAdd(technology);

    toast.success(
      technology.name + " added to your stack!"
    );
  }

  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="card-info">
        <span className="category">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          ⭐ {technology.rating}
        </span>

        <button
          className="add-button"
          onClick={handleAdd}
          disabled={isSelected}
        >
          {isSelected
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;
