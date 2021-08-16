import React , {useState,useEffect} from 'react'
import {quickSort, reversed} from '../utils/sort'

import Input from './input'
import Result from './result'

const Sort = () => {
  const [ arr, setArr ] = useState([])
  const [ sorted, setSorted] = useState(arr)
  useEffect(()=> {
    setSorted(quickSort(arr))
  },[arr])
  return (
    <div>
      <Input setArr={setArr}></Input>
      <Result arr={sorted}></Result>
      <Result arr={reversed(sorted)}></Result>
    </div>
  )
}
export default Sort