import { useState } from "react";
import "./App.css";
function App() {
  const [query, setQuery] = useState("");
  const [noOfQuestions, setNoOfQuestions] = useState(4);
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    console.log(noOfQuestions);
    console.log(difficulty);
  };
  return (
    <div className="main-container">
      <h1>Gen AI Web App By Tarun</h1>

      <div className="form-container">
        <div>
          <label> Enter Query</label>
          <input
            type="text"
            placeholder="Enter a topic, subject or query... "
            className="query-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <label>Number of Questions: {noOfQuestions}</label>
          <input
            type="range"
            min={1}
            max={10}
            className="questions-input"
            value={noOfQuestions}
            onChange={(e) => setNoOfQuestions(e.target.value)}
          />
        </div>

        <div>
          <label>Select Difficulty:</label>
          <select
            className="difficulty-input"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Generate Questions
        </button>
      </div>
    </div>
  );
}

export default App;
