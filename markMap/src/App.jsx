// src/App.js
import { useState } from "react";
import MarkmapComponent from "./components/MarkMapComponent";

function App() {
  const [markdown, setMarkdown] = useState(`# Mi Mapa Mental
- Concepto 1
  - Subconcepto 1
  - Subconcepto 2
- Concepto 2
  - Subconcepto 3
  - Subconcepto 4
`);

  return (
    <div className="App">
      <h1>Markmap en React</h1>
      <MarkmapComponent markdown={markdown} />
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows="10"
        cols="50"
        style={{ width: "100%", marginTop: "20px" }}
      />
    </div>
  );
}

export default App;
