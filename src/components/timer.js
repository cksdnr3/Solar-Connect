import React, { useEffect, useRef } from 'react'
import {koTimeFormat,enTimeFormat} from '../utils/time'

const TIMER_BY_LANG = {
  'ko' : koTimeFormat,
  'en' : enTimeFormat
}
const Timer = ({lang}) => {
  const time = useRef(null)
  const timeFormat = TIMER_BY_LANG[lang]
  useEffect(()=> {
    if (time) {
      setInterval(()=>{
        time.current.innerText = timeFormat()
      },1000)
    }
  },[time])
  return (
    <div >
      <h3 ref={time}></h3>
    </div>
  )
}

export default Timer
