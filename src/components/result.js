import React , { useState, useEffect } from 'react'
import styled from 'styled-components';

const Result = ({ arr }) => {
  const [ timer,setTimer ] = useState(3)  
  useEffect(()=>{
    if (!arr) {
      for (let i=3;i;i--) {
        setTimeout(() => {
          setTimer(i)
        },1000*(3-i))
      }
      setTimer(3)
    }
  },[arr])
  return (
    <Division>
      {arr ? arr.join(', ') : `${timer}초 대기중입니다`}
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
