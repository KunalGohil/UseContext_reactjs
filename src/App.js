// import React from 'react'
// import { createContext } from 'react'
// import ComA from './ComA'
// //jyare useContext no use karvo hoy tyare atli objects tad rakhvana rahse
// // 1)provoder
// // 2)createContext
// // 3)useCnotext
// const data=createContext();
// const data1=createContext();
// function App() {
//   const name="krunal"
//   const surname="Gohil"
//   return (
//     <>
//     <data.Provider value={name}>
//       <data1.Provider value={surname}>
//     <ComA/>
//     </data1.Provider>
//     </data.Provider>
//     </>
//   )
// }

// export default App
// export {data ,data1}
import React,{createContext} from 'react'
import ComA from './ComA'
const data1=createContext()
const data2=createContext();
function App() {
  const name="krunal"
  const surname="gohil"
  return (
    <>
    <data1.Provider value={name}>
      <data2.Provider value={surname}>
  <ComA/>
  </data2.Provider>
  </data1.Provider>
    </>
  )
}

export default App
export {data1,data2}