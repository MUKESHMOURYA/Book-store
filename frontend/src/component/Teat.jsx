import React, { useState } from "react";

function App() {
  const [visibleId, setVisibleId] = useState("id1"); // State to track visible ID

  const toggleVisibility = () => {
    setVisibleId((prevId) => (prevId === "id1" ? "id2" : "id1")); // Toggle between id1 and id2
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* First Div */}
      {visibleId === "id1" && (
        <div id="id1" className="p-5 border rounded-md bg-blue-200 w-80 text-center">
          <h2>This is Div 1 (ID: id1)</h2>
          <p>Click the button to show Div 2.</p>
        </div>
      )}

      {/* Second Div */}
      {visibleId === "id2" && (
        <div id="id2" className="p-5 border rounded-md bg-green-200 w-80 text-center">
          <h2>This is Div 2 (ID: id2)</h2>
          <p>Click the button to go back to Div 1.</p>
        </div>
      )}

      {/* Button to Toggle Visibility */}
      <button
        onClick={toggleVisibility}
        className="mt-5 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700"
      >
        {visibleId === "id1" ? "Show Div 2" : "Show Div 1"}
      </button>
    </div>
  );
}

export default App;