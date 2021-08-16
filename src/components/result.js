import React from 'react'

const Result = ({arr}) => {
  console.log(arr)
  return (
    <div style={{border:1+'px solid black',height:30+'px'}}>
      {arr.join(', ')}
    </div>
  )
}

export default Result
