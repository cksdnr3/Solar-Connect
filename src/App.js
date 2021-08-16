import React from 'react'
import Timer from './components/timer'
import Sort from './components/sort'

function App() {
  return (
    <div className="App">
      <Timer lang="ko"></Timer>
      <Sort />
      <Timer lang="en"></Timer>
    </div>
  );
}

export default App;
