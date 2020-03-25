import React from 'react'

import { Header } from './components/Header'
import { Octocats } from './components/Octocats'

const App = () => {
  return (
    <main>
      <Header />
      <Octocats />
    </main>
  )
}

export default App

// import surftocat from './images/oct10.png'
// import Dinotocat from './images/oct9.png'

// const App = () => {
//   return (
//     <body>
//       <section class="octocats">
//         <ul>
//           <li>
//             <setion>
//               {' '}
//               <img src={surftocat} />
//             </setion>
//             <section>
//               <p class="black">#140:</p>
//               <p class="bold">Surftocat</p>
//             </section>
//           </li>
//           <li>
//             <section>
//               <img src={Dinotocat} />
//             </section>
//             <section>
//               <p class="black">#130:</p>
//               <p class="bold">Dinotocat</p>
//             </section>
//           </li>
