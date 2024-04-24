// import React, { useContext } from 'react'
// import {data,data1} from './App'

// function ComC() {
//   const name=useContext(data);
//   const surname=useContext(data1);
//   return (
//     <>
//     <h1>sir my name is {name} and surname is {surname}</h1>
//     </>
//   )
// }

// export default ComC
import React from 'react'
import { data1,data2 } from './App'
import { useContext } from 'react'

function ComC() {
  const name=useContext(data1);
  const surname=useContext(data2)
  return (
    <>
    <h1>sir my name is {name} and that surname is {surname}</h1>
    </>
  )
}

export default ComC