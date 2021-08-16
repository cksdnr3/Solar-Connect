import React, { useRef } from 'react'

const Input = ({setArr}) => {
  const input = useRef(null)
  const handlerClick = (e) => {
    e.preventDefault()
    const arr = input.current.value.split(',')
    const numArr = arr.reduce((prev,val) => {
      if (val){
        let num = Number(val)
        if (!isNaN(num)){
          prev.push(num)
        }
      }
      return prev
    },[])
    setArr(numArr)
  }
  return (
    <form onSubmit={handlerClick}>
      <input ref={input}/>
      <button type="submit">시작</button>
    </form>
  )
}

export default Input
