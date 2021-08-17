import React, { useState } from 'react'
import {quickSort} from "../utils/sort";
import styled from 'styled-components';

const Input = ({setArr, handleTimeout}) => {
  const [input, setInput] = useState('')
  const handlerClick = (e) => {
    e.preventDefault()
    setArr(null)
    const arr = input.split(',')
    const error = []
    const numArr = arr.reduce((prev,val) => {
      if (val.trim()){
        let num = Number(val)
        if (!isNaN(num)){
          prev.push(num)
        } else {
          error.push(val)
        }
      }
      return prev
    },[])
    if (error.length){
      alert(`${error.join(', ')} 숫자 형식이 아니라 제외되었습니다.`)
    }
    setArr(quickSort(numArr));
    handleTimeout(numArr);
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <Form onSubmit={handlerClick}>
      <StyledInput value={input} onChange={e => onChange(e)} />
      <StyledButton type="submit">정렬하기</StyledButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
`

const StyledInput = styled.input`
  height: 44px;
  flex-grow: 1;
`

const StyledButton = styled.button`
  height: 44px;
  margin-left: 8px;
`

export default Input
