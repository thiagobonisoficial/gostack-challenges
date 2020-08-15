import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    api.get("repositories").then((response) => setRepository(response.data));
  }, []);

  async function handleAddRepository() {
    const response = await api.post("repositories", {
      "title": `THIAGO DE BONIS ${Date.now()}`,
      "url": "https://github.com/thiagobonisoficial",
      "techs": ["REPOSITORY_TECH_1", "REPOSITORY_TECH_2"]
    });


    setRepository([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`)

    if (response.status === 204) {
      setRepository([...repositories.filter(repository => repository.id !== id)]);
    }
  }

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map(repository =>  (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
