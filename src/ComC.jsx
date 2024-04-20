import React, { useContext } from 'react'
import {data,data1} from './App'

function ComC() {
  const name=useContext(data);
  const surname=useContext(data1);
  return (
    <>
    <h1>sir my name is {name} and surname is {surname}</h1>
    </>
  )
}

export default ComC