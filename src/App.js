import React from 'react'
import styled from 'styled-components';
import Timer from './components/timer'
import Sort from './components/sort'

function App() {
  return (
    <Application>
      <Timer lang="ko"></Timer>
      <Sort />
      <Timer lang="en"></Timer>
    </Application>
  );
}

const Application = styled.div`
    max-width: 350px;
    margin: auto;
    padding: 48px 15px;
    
    * {
        box-sizing: border-box;
    }
    
    div {
        text-align: center
    }
    & > div:first-child {
        margin-bottom: 40px;
    }
    & > div:last-child {
        margin-top: 40px;
    }
`

export default App;
