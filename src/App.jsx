
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechnologySection from "./components/TechnologySection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function loadTechnologies() {
    setLoading(true);
    setError("");

    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load technologies.");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadTechnologies();
  }, []);

  function handleAdd(technology) {
    if (selected.some((item) => item.id === technology.id)) {
      return;
    }

    setSelected([...selected, technology]);
  }

  function handleRemove(id) {
    setSelected(
      selected.filter((item) => item.id !== id)
    );
  }

  function handleRemoveAll() {
    setSelected([]);
  }

  return (
    <div>
      <Navbar />

     <main>
  <Hero />
  <TechnologySection
    technologies={technologies}
    selected={selected}
    loading={loading}
    error={error}
    onRetry={loadTechnologies}
    onAdd={handleAdd}
    onRemove={handleRemove}
    onRemoveAll={handleRemoveAll}
  />
</main>
<Footer />
    </div>
  );
}

export default App;
