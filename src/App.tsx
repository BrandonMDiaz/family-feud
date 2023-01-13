import React from "react";

import { GameContext, game } from "./hooks/gameContext";
function App() {
  return (
    <GameContext.Provider value={game}>
      <div></div>
    </GameContext.Provider>
  );
}

export default App;
