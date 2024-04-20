import React from 'react'
import { createContext } from 'react'
import ComA from './ComA'
//jyare useContext no use karvo hoy tyare atli objects tad rakhvana rahse
// 1)provoder
// 2)createContext
// 3)useCnotext
const data=createContext();
const data1=createContext();
function App() {
  const name="krunal"
  const surname="Gohil"
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={surname}>
    <ComA/>
    </data1.Provider>
    </data.Provider>
    </>
  )
}

export default App
export {data ,data1}