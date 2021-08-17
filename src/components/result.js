import React from 'react'
import styled from 'styled-components';

const Result = ({ arr }) => {
  console.log(arr);
  return (
    <Division>
      {arr.join(', ')}
    </Division>
  )
}

const Division = styled.div`
  border: 1px solid gray;
  min-height: 44px;
  height: auto;
  line-height: 43px;
`

export default Result
