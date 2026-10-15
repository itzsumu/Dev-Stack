
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

function TechnologySection({
  technologies,
  selected,
  loading,
  error,
  onRetry,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section className="technology-section container" id="technologies">
      <div className="section-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <p className="loading-message">
          Loading technologies...
        </p>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>

          <button onClick={onRetry}>
            Try Again
          </button>
        </div>
      ) : (
        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selected.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          <YourStack
            selected={selected}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
}

export default TechnologySection;
