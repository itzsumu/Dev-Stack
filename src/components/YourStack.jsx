
import { toast } from "react-toastify";

function YourStack({
  selected,
  onRemove,
  onRemoveAll,
}) {
  function handleRemove(id, name) {
    onRemove(id);
    toast.info(name + " removed from your stack!");
  }

  function handleRemoveAll() {
    if (selected.length === 0) {
      return;
    }

    onRemoveAll();
    toast.info("Your stack has been cleared!");
  }

  return (
    <aside className="your-stack">
      <h3>Your Stack</h3>

      <p>
        {selected.length} Technology Selected
      </p>

      {selected.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
          <span>
            Add technologies to build your stack.
          </span>
        </div>
      ) : (
        <div className="stack-list">
          {selected.map((technology) => (
            <div
              className="stack-item"
              key={technology.id}
            >
              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div>
                <strong>{technology.name}</strong>
                <p>{technology.category}</p>
              </div>

              <button
                onClick={() =>
                  handleRemove(
                    technology.id,
                    technology.name
                  )
                }
                aria-label={
                  "Remove " + technology.name
                }
              >
                ×
              </button>
            </div>
          ))}

          <button
            className="remove-all"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}

export default YourStack;
