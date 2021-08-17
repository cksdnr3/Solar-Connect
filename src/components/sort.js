import React , {useState} from 'react'
import {reverse} from '../utils/sort'
import styled from 'styled-components';

import Input from './input'
import Result from './result'

const Sort = () => {
  const [ arr, setArr ] = useState([])
  const [reversedArr, setReversedArr] = useState([]);

  const handleTimeout = (arr) => {
      setTimeout(() => {
          setReversedArr(reverse(arr));
      }, 3000);
      setReversedArr(null);
  }

  return (
    <Container>
      <Input handleTimeout={handleTimeout} setArr={setArr}></Input>
      <Result arr={arr}></Result>
      <Result arr={reversedArr}></Result>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    & > div, form {
        margin-bottom: 30px;
    }
    
    & > div:last-child {
        margin-bottom: 0;
    }
`

export default Sort
