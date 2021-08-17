import React, {useRef, useState} from 'react'
import {quickSort} from "../utils/sort";
import styled from 'styled-components';

const Input = ({setArr, handleTimeout}) => {
  const [input, setInput] = useState('')
  const handlerClick = (e) => {
    e.preventDefault()
    const arr = input.split(',')
    const numArr = arr.reduce((prev,val) => {
      console.log(val)
      if (val.trim()){
        let num = Number(val)
        if (!isNaN(num)){
          prev.push(num)
        } else {
          alert("숫자를 입력해주세요.")
          return [];
        }
      }
      return prev
    },[])
    setInput('');
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
